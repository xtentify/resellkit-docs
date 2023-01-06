---
title: Install (RK)
sidebar_position: 2
---

# Download & install (RK)

First thing first, The app needs to get downloaded & installed. You need to find the installer for your system <a href="https://resellkit.app/download/" target="_blank">download page</a>. The website will try to recommend an installer based on your operating system and running CPU's architecture, If nothing is recommended, Lookup your computer's operating system and cpu arch to download the right installer.

Here are some examples.

- Macbook or iMac M1/M2 have ARM64 based chips and usually they are running on MacOS.
- Macbook Air/Pro is usually running on 64bit chips, AKA x86_64 or x64
- Modern computers & laptops with intel CPUs usually have 64bit cpus also known as x86_64 or x64.


The install instructions for each supported operating system (OS) is slightly different. Below you can find the instructions for your system's OS.

## Install on Windows

The setup executable is named as the following: `resellkit-setup-<version>-<arch>.exe`. Once the file is download, It will open by double-clicking on it, Or right-click then choose open.

The setup progress bar should open up and then when it finishes the app will open automatically.

:::tip
If you are updating the app, Make sure you have closed it before running the setup.
:::

:::info
For some users windows defender may prevent the setup to open. If you'd like to proceed, Click on **"More info"**, Which will show more details including the app's publisher, Make sure the publisher matches **`Xtentify LLC`** (company's name) and then click on **"Run"**.

<img src="/img/windows-smartscreen.png" width="480" height="450" alt="Windows smartscreen preventing executable to open" />
:::

## Install on MacOS

RK's installer for MacOS is a `.dmg` image, A few steps is required to properly install/update the app in the `Applications` folder. You need to open the `.dmg` file and then drag & drop the `RK` app to `Applications` folder. Once the app is copied to the `Applications` folder you should be able to open it from the launchpad.

The gif animation below shows how it is done.
<img src="/img/install-on-macos.gif" width="480" height="270" alt="The GIF animation that illustrates how to install RK on MacOS" />

## Install on Linux 

RK has been published `.AppImage` packaging. There's no need to install it, Once the image is downloaded, You to enable executable permission for the file, And then open it by double-click or run the executable on terminal `./resellkit-<version>-<arch>.AppImage`.

Running the commands below should enable executable and run the app. Note. You need to replace `path/to/rkappimage/dir` with the folder where the `.AppImage` is located. Usually it is in the download folder. Also replace `<version>` & `<arch>` with downloaded version and cpu architecture.
```
cd path/to/rk-appimage/dir
chmod +x resellkit-<version>-<arch>.AppImage
./resellkit-<version>-<arch>.AppImage
```

## What's next?

If you are starting to learn about ResellKit, Click on [Get started](intro) to continue your journey on ResellKit docs.
