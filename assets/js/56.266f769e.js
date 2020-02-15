(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{268:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"wasabi-setup-in-virtual-machines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-setup-in-virtual-machines"}},[e._v("#")]),e._v(" Wasabi Setup in Virtual Machines")]),e._v(" "),t("h2",{attrs:{id:"benefits-of-virtual-machines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-virtual-machines"}},[e._v("#")]),e._v(" Benefits of Virtual Machines")]),e._v(" "),t("p",[e._v("Virtualization allows you to create and run as many virtual machines (VMs) on a single computer at one time as desired.\nThe only constraints are the amount of RAM and hard disk space available on the host computer.")]),e._v(" "),t("p",[e._v("Each VM is isolated from the host machine.\nTherefore, such things as corrupted files, configuration errors, malware, etc., encountered during the use of a VM do not affect the host computer.")]),e._v(" "),t("p",[e._v("If you are a developer, using virtual machines gives you several powerful features.\nYou can easily:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Create snapshots of a VM's state at any time.\nThese snaphots can be restored later if a problem or undesired condition arises in the current state of the VM.")])]),e._v(" "),t("li",[t("p",[e._v("Set up a template VM with a desired development environment or configuration, and then quickly create lightweight, disposable clones of the template for specific tests.")])]),e._v(" "),t("li",[t("p",[e._v("Develop and/or test applications in Windows, Linux, and MacOS at the same time, on the same computer.\nYou can link them together in a customizable internal network if desired.")])])]),e._v(" "),t("p",[e._v("For developers, the use of virtual machines offers some of the basic version control features of git, but applied to operating systems rather than files or projects.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#benefits-of-virtual-machines"}},[e._v("Benefits of Virtual Machines")])]),t("li",[t("a",{attrs:{href:"#qubes"}},[e._v("Qubes")]),t("ul",[t("li",[t("a",{attrs:{href:"#generate-template-vm"}},[e._v("Generate Template VM")])]),t("li",[t("a",{attrs:{href:"#install-dependencies"}},[e._v("Install Dependencies")])]),t("li",[t("a",{attrs:{href:"#generate-app-vm"}},[e._v("Generate App VM")])]),t("li",[t("a",{attrs:{href:"#compile-and-run-wasabi"}},[e._v("Compile and Run Wasabi")])]),t("li",[t("a",{attrs:{href:"#install-package-in-app-vm"}},[e._v("Install Package in App VM")])])])]),t("li",[t("a",{attrs:{href:"#virtualbox"}},[e._v("VirtualBox")]),t("ul",[t("li",[t("a",{attrs:{href:"#create-your-first-virtual-machine"}},[e._v("Create Your First Virtual Machine")])]),t("li",[t("a",{attrs:{href:"#generate-a-template-vm"}},[e._v("Generate a Template VM")])]),t("li",[t("a",{attrs:{href:"#install-required-dependencies"}},[e._v("Install Required Dependencies")])]),t("li",[t("a",{attrs:{href:"#cloning-a-virtual-machine"}},[e._v("Cloning a Virtual Machine")])]),t("li",[t("a",{attrs:{href:"#how-to-create-a-linked-clone"}},[e._v("How to Create a Linked Clone")])]),t("li",[t("a",{attrs:{href:"#compile-and-run-wasabi-in-your-vm"}},[e._v("Compile and Run Wasabi in Your VM")])]),t("li",[t("a",{attrs:{href:"#install-latest-package"}},[e._v("Install Latest Package")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"qubes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qubes"}},[e._v("#")]),e._v(" Qubes")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.qubes-os.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qubes"),t("OutboundLink")],1),e._v(" is a free and open-source security-oriented operating system meant for single-user desktop computing.\nQubes OS leverages xen-based virtualization to allow for the creation and management of isolated virtual machines (VMs) called qubes.\nThis is valuable for users of high security software like Wasabi Wallet, and especially useful for testers of cutting edge developer branches.\nThere is a separation of the virtual machines running Wasabi on testnet, and those running on mainnet with valuable private keys.\nIf a reviewer compiles a malicious developer branch, then his mainnet private keys are secure in a different qube.")]),e._v(" "),t("p",[e._v("This is a step-by-step guide on how to properly compile Wasabi Wallet from source in independent qubes.\nFor tutorials on how to "),t("a",{attrs:{href:"https://www.qubes-os.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("download"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://www.qubes-os.org/doc/installation-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install"),t("OutboundLink")],1),e._v(" Qubes, please see their exhaustive documentation.")]),e._v(" "),t("h3",{attrs:{id:"generate-template-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-template-vm"}},[e._v("#")]),e._v(" Generate Template VM")]),e._v(" "),t("p",[e._v("The dependencies to "),t("RouterLink",{attrs:{to:"/using-wasabi/BuildSource.html"}},[e._v("compile Wasabi from source")]),e._v(" will be downloaded and installed in a new template VM, which is generated by cloning the Debian template from the "),t("code",[e._v("dom0")]),e._v(" terminal.")],1),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-clone template-debian-10 template-wasabi\n")])])]),t("h3",{attrs:{id:"install-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[e._v("#")]),e._v(" Install Dependencies")]),e._v(" "),t("p",[e._v("Start the gnome-terminal of "),t("code",[e._v("template-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-run -a template-wasabi gnome-terminal\n")])])]),t("p",[e._v("Update the "),t("code",[e._v("template-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@template-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@template-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@template-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" dist-upgrade\n")])])]),t("p",[e._v("Install "),t("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1 SDK"),t("OutboundLink")],1),e._v(' for "Building Apps" in '),t("code",[e._v("template-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Optional for privacy")]),e._v(" "),t("p",[e._v("You can disable .NET's telemetry, which is sending some usage information to Microsoft:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@template-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOTNET_CLI_TELEMETRY_OPTOUT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("If you need to update .NET Core, then do it in this VM.\nNow shut down "),t("code",[e._v("template-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-shutdown template-wasabi\n")])])]),t("h3",{attrs:{id:"generate-app-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-app-vm"}},[e._v("#")]),e._v(" Generate App VM")]),e._v(" "),t("p",[e._v("Create a new App VM "),t("code",[e._v("source-wasabi")]),e._v(" which is based on "),t("code",[e._v("template-wasabi")]),e._v(".\nThis qube will be used to download, compile and run the Wasabi source code.\nThis way you can create multiple App VMs for different testing purposes.\nAll these App VMs will be updated when you update "),t("code",[e._v("template-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-create source-wasabi --template template-wasabi --label red\n")])])]),t("h3",{attrs:{id:"compile-and-run-wasabi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-run-wasabi"}},[e._v("#")]),e._v(" Compile and Run Wasabi")]),e._v(" "),t("p",[e._v("Start the gnome-terminal of "),t("code",[e._v("source-wasabi")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-run -a source-wasabi gnome-terminal\n")])])]),t("p",[e._v("Clone & run Wasabi.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" WalletWasabi/WalletWasabi.Gui\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ dotnet run\n")])])]),t("p",[e._v("Checkout a developer branch.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" nopara73 https://github.com/nopara73/WalletWasabi\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch nopara73\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("development branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Pull the latest commits.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@source-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),t("h3",{attrs:{id:"install-package-in-app-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-package-in-app-vm"}},[e._v("#")]),e._v(" Install Package in App VM")]),e._v(" "),t("p",[e._v("Alternatively, you can also install the package in a new App VM, this is a stable version suitable to use on mainnet and is separated from the development App VM.\nThere are no additional dependencies required, so the App VM can be based on "),t("code",[e._v("template-debian-10")]),e._v(" directly.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-create package-wasabi --template template-debian-10 --label red\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@dom0 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ qvm-run -a package-wasabi gnome-terminal\n")])])]),t("p",[t("RouterLink",{attrs:{to:"/using-wasabi/InstallPackage.html#debian-and-ubuntu"}},[e._v("Download, verify and install")]),e._v(" the latest "),t("code",[e._v("Wasabi-1.1.10.2.deb")]),e._v(" package in "),t("code",[e._v("package-wasabi")]),e._v(", then start Wasabi.")],1),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("user@package-wasabi ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("$ wassabee\n")])])]),t("h2",{attrs:{id:"virtualbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox"}},[e._v("#")]),e._v(" VirtualBox")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://virtualbox.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("VirtualBox"),t("OutboundLink")],1),e._v(' is a lightweight, powerful free and open-source virtualization tool that allows you to run one or more independent operating systems as "virtual machines" (VMs) on your computer.\nThe computer on which VirtualBox is installed is referred to as the "host" machine, and the VMs that are created are referred to as "guests".')]),e._v(" "),t("p",[e._v("Presently, VirtualBox runs on Windows, Linux, Macintosh, and Solaris hosts and supports a large number of guest operating systems including, but not limited to Windows (NT 4.0, 2000, XP, Server 2003, Vista, Windows 7, Windows 8, Windows 10), DOS/Windows 3.x, Linux (2.4, 2.6, 3.x and 4.x), Solaris and OpenSolaris, OS/2, and OpenBSD.")]),e._v(" "),t("p",[e._v("You can download the latest Virtualbox binary for your host OS "),t("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Make sure that you also download the VirtualBox Extension Pack, shown just below the links for downloading the binary installation files.\nThis package will add several useful capabilities to VirtualBox.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/Virtualbox.png",alt:""}})]),e._v(" "),t("p",[e._v("Detailed instructions for installing VirtualBox on your host computer can be found "),t("a",{attrs:{href:"https://www.virtualbox.org/manual/UserManual.html#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If you run into trouble or have special requirements, the complete User Manual can be found "),t("a",{attrs:{href:"https://download.virtualbox.org/virtualbox/UserManual.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"create-your-first-virtual-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-virtual-machine"}},[e._v("#")]),e._v(" Create Your First Virtual Machine")]),e._v(" "),t("p",[e._v("Detailed instructions for creating various types of virtual machines can be found "),t("a",{attrs:{href:"https://www.virtualbox.org/manual/UserManual.html#gui-createvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Things to Note:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("For each operating system version that you wish to use in a VM, you will need an .iso installation file for that particular OS.")])]),e._v(" "),t("li",[t("p",[e._v('During the installation process for whatever OS you have chosen for your VM, you will likely see references to your hard disk and/or Master Boot Record.\nBe assured that those references are pertaining to your "virtual" hard drive and/or boot records that are a part of the VM.\nThey are NOT referring to your computer\'s physical drive or boot records.')])])]),e._v(" "),t("p",[e._v("Other than the creation of a folder which holds the data for each VM that you may create, your physical hard drive and/or boot records will not be altered or harmed by the installation of an OS inside the VM.")]),e._v(" "),t("ul",[t("li",[e._v('Optional, but strongly recommended: Enable the built-in "Guest Additions" functions of Virtualbox.\nThis step will give you a full-sized display, and make the usage of your mouse seamless when switching between different VMs that are running at the same time.\nInstruction for enabling "Guest Additions" can be found '),t("a",{attrs:{href:"https://www.virtualbox.org/manual/UserManual.html#guestadd-intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"generate-a-template-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-template-vm"}},[e._v("#")]),e._v(" Generate a Template VM")]),e._v(" "),t("p",[e._v("It's now time to start customizing your development templates!\nMake sure that you have run any needed updates for your VM.")]),e._v(" "),t("p",[e._v("Next, the dependencies to "),t("RouterLink",{attrs:{to:"/using-wasabi/BuildSource.html"}},[e._v("compile Wasabi from source")]),e._v(" will be downloaded and installed in a new template VM, which can be based on your preferred OS.")],1),e._v(" "),t("p",[e._v("With VirtualBox, you can create separate templates based on Windows, or any Linux distribution.\nFinally, you can add any other tools that you prefer, such as Visual Studio / Visual Studio Code, Atom, etc..")]),e._v(" "),t("h3",{attrs:{id:"install-required-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-required-dependencies"}},[e._v("#")]),e._v(" Install Required Dependencies")]),e._v(" "),t("p",[e._v("Start your template VM and open a terminal window.")]),e._v(" "),t("p",[e._v("Install "),t("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1 SDK"),t("OutboundLink")],1),e._v(' for "Building Apps".')]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Optional for privacy")]),e._v(" "),t("p",[e._v("You can disable .NET's telemetry, which is sending some usage information to Microsoft.\nIn your terminal window, run:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("your@vm:~$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOTNET_CLI_TELEMETRY_OPTOUT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("If you need to update .NET Core, do it in this VM.")]),e._v(" "),t("p",[e._v("Now, shut down your template VM.")]),e._v(" "),t("h3",{attrs:{id:"cloning-a-virtual-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloning-a-virtual-machine"}},[e._v("#")]),e._v(" Cloning a Virtual Machine")]),e._v(" "),t("p",[e._v("At this point, you should have a Template VM set up with your preferred tools and environment.")]),e._v(" "),t("p",[e._v("Now the real fun begins, and you will be rewarded for all of your hard work to get to this point!")]),e._v(" "),t("p",[e._v('VirtualBox will allow you to make as many lightweight, or "linked" clones from a template as you may need.\n"Linked" means that the vast majority of the system files are borrowed from the template VM while the clone is running, so that the clone takes up much, much less hard drive space.')]),e._v(" "),t("p",[e._v('Any changes to the clone VM, constructive or destructive, do not affect the template VM.\nYou may think of a linked clone as a "disposable" copy of your template.\nPerfect for experimentation, with no risk to your template or your computer!')]),e._v(" "),t("h3",{attrs:{id:"how-to-create-a-linked-clone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-linked-clone"}},[e._v("#")]),e._v(" How to Create a Linked Clone")]),e._v(" "),t("p",[e._v("Instructions on how to create linked clones in VirtualBox can be found "),t("a",{attrs:{href:"https://www.virtualbox.org/manual/UserManual.html#clone",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"compile-and-run-wasabi-in-your-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-run-wasabi-in-your-vm"}},[e._v("#")]),e._v(" Compile and Run Wasabi in Your VM")]),e._v(" "),t("p",[e._v("Start your cloned VM, and open a terminal window.")]),e._v(" "),t("p",[e._v("Clone & run Wasabi.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("your@vm:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\nyour@vm:~$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" WalletWasabi/WalletWasabi.Gui\nyour@vm:~$ dotnet run\n")])])]),t("p",[e._v("Checkout a developer branch.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("your@vm:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" nopara73 https://github.com/nopara73/WalletWasabi\nyour@vm:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch nopara73\nyour@vm:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("development branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Pull the latest commits.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("your@vm:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),t("p",[e._v("If you are comfortable with "),t("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),t("OutboundLink")],1),e._v(", you can now have several versions of Wasabi running for testing purposes, at the same time, on the same computer.")]),e._v(" "),t("h3",{attrs:{id:"install-latest-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-latest-package"}},[e._v("#")]),e._v(" Install Latest Package")]),e._v(" "),t("p",[e._v("Alternatively, you can also install the package in a new VM.\nThis is a stable version suitable to use on mainnet and is separated from the development VM.\nThere are no additional dependencies required to run this version.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/using-wasabi/InstallPackage.html"}},[e._v("Download, verify and install")]),e._v(" the latest "),t("code",[e._v("Wasabi-1.1.10.2")]),e._v(" package in your VM, then start Wasabi.")],1),e._v(" "),t("p",[t("strong",[e._v("Have fun, and please consider contributing to the Wasabi project!")])]),e._v(" "),t("p",[e._v("If you would like to help with Wasabi development, refer to our "),t("RouterLink",{attrs:{to:"/using-wasabi/building-wasabi/HowToDebug.html#before-starting"}},[e._v("developers debugging guide")]),e._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);