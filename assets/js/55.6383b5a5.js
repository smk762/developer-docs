(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{448:function(t,s,a){"use strict";a.r(s);var n=a(50),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-antara-gaming-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-antara-gaming-systems"}},[t._v("#")]),t._v(" Tutorial: Antara Gaming Systems")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This tutorial presents the process of creating a gaming system using the Antara Gaming SDK.")]),t._v(" "),a("p",[t._v('This tutorial assumes that the reader desires to create a system for a project that has a root directory outside of the Antara Gaming SDK directory. (An "external game project.")')]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Please read the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/gaming-sdk-tutorial-0.html"}},[t._v("Getting Started")]),t._v(" tutorial before beginning this tutorial.")],1),t._v(" "),a("p",[t._v("Please also review the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/gaming.html"}},[t._v("ecs documentation")]),t._v(" section of the API documentation, to gain a brief introduction to the essential concepts of this tutorial.")],1),t._v(" "),a("h2",{attrs:{id:"create-initial-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-initial-files"}},[t._v("#")]),t._v(" Create Initial Files")]),t._v(" "),a("p",[t._v("Create a "),a("code",[t._v("CMakeLists.txt")]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CMAKE_SOURCE_DIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" STREQUAL $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CMAKE_BINARY_DIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FATAL_ERROR "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Prevented in-tree build. Please create a build directory outside of the source code and call cmake from there"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cmake_minimum_required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VERSION "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CMAKE_CXX_STANDARD "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("my_game_project DESCRIPTION "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_game_description"')]),t._v(" LANGUAGES CXX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NOT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${CMAKE_CXX_COMPILER_ID}"')]),t._v(" STREQUAL "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FATAL_ERROR "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Only Clang is supported (minimum LLVM 8.0)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CMAKE_SYSTEM_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" STREQUAL "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Linux"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LINUX TRUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FetchContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FetchContent_Declare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk\n        URL https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//github.com/KomodoPlatform/antara-gaming-sdk/archive/master.zip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FetchContent_MakeAvailable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_apple_env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PROJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" my_example_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("target_link_libraries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PROJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" PUBLIC antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("As indicated in the "),a("code",[t._v("CMakeLists.txt")]),t._v(" file, the project also needs a "),a("code",[t._v("C++")]),t._v(" file named "),a("code",[t._v("my_example_system.cpp")]),t._v(" with the following contents.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/world/world.app.hpp>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("my_world")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token base-clause"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("app")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    my_world world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"build-the-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-the-project"}},[t._v("#")]),t._v(" Build the Project")]),t._v(" "),a("p",[t._v("The project is now ready for the "),a("code",[t._v("build")]),t._v(" process.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("In the following video, the actions are performed on an OSX setup. Please refer to the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/gaming.html"}},[t._v("Getting Started Tutorial")]),t._v(" for more information about other operating systems.")],1)]),t._v(" "),a("embed"),t._v(" "),a("script",{attrs:{id:"asciicast-RuOAzT29eEl51cOrsnX1yEFyo",src:"https://asciinema.org/a/RuOAzT29eEl51cOrsnX1yEFyo.js",async:"","data-speed":"3","data-size":"small"}}),t._v(" "),a("h2",{attrs:{id:"create-a-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-system"}},[t._v("#")]),t._v(" Create a System")]),t._v(" "),a("p",[t._v("Between the "),a("code",[t._v("using namespace")]),t._v(" statement and the definition of the class "),a("code",[t._v("my_world")]),t._v(", create a system class that is defined as a "),a("code",[t._v("pre_update_system")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pre_concrete_system")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ecs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("pre_update_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here the constructor can take other additional arguments but the first two are mandatory")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("registry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Empty for the moment")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Place the cursor at the body of the constructor of the class "),a("code",[t._v("my_world")]),t._v(".")]),t._v(" "),a("p",[t._v("In order to load the system, use the function "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/gaming.html#create-system"}},[t._v("create_system")]),t._v(" of the "),a("code",[t._v("system_manager")]),t._v(" class.")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here there is no need to add any parameters for the constructor")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! because the mandatory parameters are forwarded by default")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("system_manager_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-a-quit-game-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-quit-game-event"}},[t._v("#")]),t._v(" Add a Quit Game Event")]),t._v(" "),a("p",[t._v("Currently, the source code creates in an infinite loop, as the system is running inside the game loop.")]),t._v(" "),a("p",[t._v("Use the "),a("a",{attrs:{href:"https://github.com/skypjack/entt/wiki/Crash-Course:-events,-signals-and-everything-in-between#event-dispatcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("dispatcher"),a("OutboundLink")],1),t._v(" to stop the system.")]),t._v(" "),a("p",[t._v("Add source code that emits a "),a("code",[t._v("quit_game event")]),t._v(" that the game world will catch and stop the gaming loop.")]),t._v(" "),a("p",[t._v("Create a "),a("code",[t._v("counter")]),t._v(" as a private field of the system and increment the counter each time the update function is called. At "),a("code",[t._v("10")]),t._v(" iterations, emit an event to leave the game.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pre_concrete_system")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ecs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("pre_update_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here the constructor can take other additional arguments, but the first two are mandatory")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("registry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nb_iteration: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("nb_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nb_iteration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10u")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("dispatcher_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trigger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("quit_game"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("size_t nb_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0u")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("REFL_AUTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! This line is very important, it's give a static reflection name function to your system, otherwise you will not compile.")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Don't forget to add "),a("code",[t._v("#include <iostream>")]),t._v(" at the top of the file.")])]),t._v(" "),a("h2",{attrs:{id:"test-the-gaming-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-the-gaming-system"}},[t._v("#")]),t._v(" Test the Gaming System")]),t._v(" "),a("p",[t._v("The game should now compile, and when executed, iterate "),a("code",[t._v("10")]),t._v(" times and close.")]),t._v(" "),a("h4",{attrs:{id:"full-code-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-code-sample"}},[t._v("#")]),t._v(" Full Code Sample")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/world/world.app.hpp>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pre_concrete_system")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ecs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("pre_update_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here the constructor can take other additional arguments but the first two are mandatory")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("registry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nb_iteration: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("nb_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nb_iteration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10u")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("dispatcher_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trigger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("quit_game"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre_concrete_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("size_t nb_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0u")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("REFL_AUTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("my_world")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token base-clause"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("app")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here there is no need to add any parameters for the constructor")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! because the mandatory parameters are forwarded by default")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("system_manager_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre_concrete_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    my_world world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);