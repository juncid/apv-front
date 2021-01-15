# Node 12
FROM mcr.microsoft.com/powershell:nanoserver-1903 AS downloadnodejs
SHELL ["pwsh", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]
RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/latest-v12.x/node-v12.20.1-win-x64.zip"; Expand-Archive nodejs.zip -DestinationPath C:\; Rename-Item "C:\node-v12.20.1-win-x64" c:\nodejs

# windows
FROM mcr.microsoft.com/windows/servercore:1809 as base

COPY --from=downloadnodejs C:/nodejs/ C:/nodejs/

ENV PATH="$PATH;C:/nodejs"
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
# Copy source files from host computer to the container
COPY . ./
#COPY public public

# Install dependencies
RUN npm install

# Build the app
RUN npm run build


FROM mcr.microsoft.com/windows/servercore:1809 as final
#COPY THE APACHE INSTALLATION FILES INTO THE CONTAINER

COPY --from=base /app/build /app/build
ADD apache/setup c:/apache

#INSTALLING APACHE
RUN ["msiexec.exe", "/i", "C:\\apache\\httpd-2.2.25-win32-x86-no_ssl.msi", "/qn"]

#APACHE CONFIGURATION

RUN powershell.exe -command \
#COPY CUSTOMIZE HTTPD CONFIGURTION FILE TO APACHE conf FOLDER
copy-item c:/apache/httpd.conf -destination '"c:/program files (x86)/Apache Software Foundation/Apache2.2/conf"'; \
#INSTALLING APACHE SERVICE USING BATCH FILE
cmd.exe /c c:/apache/service.bat; \
#SET APACHE SERVICE TO RUN UNDER LOCAL SYSTEM ACCOUNT
sc.exe config apache2.2 obj=LocalSystem; \
#REMOVE THE APACHE SETUP FILES DIRECTORY
remove-item c:/apache -Recurse

EXPOSE 80

#si no ponemos esto el container termina
CMD ping -t localhost > NUL

