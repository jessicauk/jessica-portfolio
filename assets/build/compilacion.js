angular.module("portfolioApp",["ui.router","site.module","services.module","music.module"]).run(["$rootScope","$http",function(t,e){t.mensaje="Angular tools",t.prueba="Es una pruueba"}]).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(t,e,o){o.otherwise("/"),e.state("index",{url:"/",views:{"@":{templateUrl:"assets/templates/layout.html",controller:"mainController"},"header@index":{templateUrl:"assets/templates/header.html",controller:"mainController"},"footer@index":{templateUrl:"assets/templates/footer.html",controller:""}}}).state("index.about",{url:"about",templateUrl:"assets/templates/about.html",controller:"about.controller"}).state("index.work",{url:"work",templateUrl:"assets/templates/work.html",controller:"work.controller"}).state("index.work.musicApi",{url:"/musicapi",views:{spotifyApi:{templateUrl:"assets/templates/work/music.html",controller:"music.controller"}}}).state("index.work.shapes",{url:"/shapes",views:{shapes:{templateUrl:"assets/templates/work/cssShapes.html",controller:""}}}).state("index.contact",{url:"contact",templateUrl:"assets/templates/contact.html",controller:""})}]).controller("mainController",["$scope","$rootScope","$http",function(t,e,o){t.message=e.mensaje,t.resizeText=!0,$(document).ready(function(){$("#about").on("click",function(){$("#about").position()}),$(window).resize(function(){$sizeBlock=window.matchMedia("(min-width: 525px)"),$sizeBlock.matches?(console.log("resize"),t.resizeText=!0):t.resizeText=!1})})}]).directive("directiveMenuResponsive",function(){return{restrict:"A",link:function(t,e,o){$(e).on("click",function(){$lista=$("#list-items"),$(".text-menu").hasClass("show")?($(".text-menu").removeClass("show").addClass("hide"),$("#menu-adapt").addClass("menu-transform")):(setTimeout(function(){$(".text-menu").removeClass("hide").addClass("show")},500),$("#menu-adapt").removeClass("menu-transform")),$lista.slideToggle("slow")})}}}),angular.module("prueba.module",[]).controller("prueba.controller",["$scope","$rootScope","$http",function(t,e,o){t.url=""}]),angular.module("site.module",[]).controller("about.controller",["$scope",function(t){$(document).ready(function(){$(".icon-plus").on("click",function(){var t=$(this),e=$(this).attr("href");$(e).slideToggle("slow"),$(t).toggleClass("icon-rotate")}),$(window).scroll(function(){var t=$(window).scrollTop();console.log(t+" scrol_pos")})})}]).controller("work.controller",["$scope","$http","servicesFactory",function(t,e,o){t.buttonFile=function(){console.log("entro"),t.file=o.infoFileDownload("https://api.spotify.com/v1/search?query=luis&offset=0&limit=20&type=artist")}}]).controller("contact.controller",["$scope",function(t){}]),angular.module("services.module",[]).factory("servicesFactory",["$http",function(t){return{searchItem:function(e,o,r){return t.get(e+"/v1/search?q="+r+"&type="+o)},albumArtist:function(e,o){return t.get(e+"/v1/artists/"+o+"/albums")},albumTracks:function(e,o){return t.get(e+"/v1/albums/"+o+"/tracks")},infoFileDownload:function(e){return t.get(e)}}}]).directive("downloadBtn",function(){return{restrict:"AE",scope:{fileName:"@fileN"},template:'<button id="fileBtn" download="{{fileName}}.txt" ng-click="buttonFile()">Click here!</button>',link:function(t,e,o){}}}),angular.module("music.module",[]).controller("music.controller",["$scope","$http","servicesFactory",function(t,e,o){t.baseUrl="https://api.spotify.com",t.artist="",t.type="artist",t.loader=!1,t.fail=!1,t.searchFor=function(e,r){o.searchItem(t.baseUrl,e,r).success(function(e){t.loader=!1,t.emptyArray=!1,t.artista="",t.artista=e.artists.items[0],void 0!==t.artista?(t.artist="",t.emptyArray=!1,t.img=t.artista.images[0].url,t.genres=t.artista.genres,t.idArtist=t.artista.id,t.artistName=t.artista.name,t.artistAlbum(t.idArtist),t.fail=!1):(t.artista=[],t.img="",t.genres=[],t.artistName="",t.emptyArray=!0,t.fail=!1,t.message="Artist not found, try once!")}).error(function(e){t.emptyArray=!0,t.message="",t.fail=!0,t.failMessage="Please, type a name in the box!",console.log("error D:")})},t.muestra=!1,t.showAll=function(){t.muestra=!0},t.albumTracks=function(e){t.muestra=!0,o.albumTracks(t.baseUrl,e).success(function(e){t.albumTracks=e.items}).error(function(t){console.log("tracks no : ")})},t.artistAlbum=function(e){o.albumArtist(t.baseUrl,e).success(function(e){t.albums=e.items}).error(function(t){console.log("album no : ")})}}]);