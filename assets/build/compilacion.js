angular.module("portfolioApp",["ui.router","site.module","services.module","music.module"]).run(["$rootScope","$http",function(e,t){e.mensaje="Angular tools",e.prueba="Es una pruueba"}]).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(e,t,o){o.otherwise("/"),t.state("index",{url:"/",views:{"@":{templateUrl:"assets/templates/layout.html",controller:"mainController"},"header@index":{templateUrl:"assets/templates/header.html",controller:"mainController"},"footer@index":{templateUrl:"assets/templates/footer.html",controller:""}}}).state("index.about",{url:"about",templateUrl:"assets/templates/about.html",controller:"about.controller"}).state("index.work",{url:"work",templateUrl:"assets/templates/work.html",controller:"work.controller"}).state("index.work.musicApi",{url:"/musicapi",views:{spotifyApi:{templateUrl:"assets/templates/work/music.html",controller:"music.controller"}}}).state("index.work.shapes",{url:"/shapes",views:{shapes:{templateUrl:"assets/templates/work/cssShapes.html",controller:""}}}).state("index.contact",{url:"contact",templateUrl:"assets/templates/contact.html",controller:""})}]).controller("mainController",["$scope","$rootScope","$http",function(e,t,o){e.message=t.mensaje,e.resizeText=!0,$(document).ready(function(){$("#about").on("click",function(){$("#about").position()}),$(window).resize(function(){$sizeBlock=window.matchMedia("(min-width: 525px)"),$sizeBlock.matches?(console.log("resize"),e.resizeText=!0):e.resizeText=!1}),$(window).scroll(function(){var e=$(window).scrollTop();console.log(e+" scrol_pos"),e>60?angular.element(".main-block:even").addClass("animate1"):angular.element(".main-block:even").removeClass("animate1"),e>252?angular.element(".main-block:odd").addClass("animate2"):angular.element(".main-block:odd").removeClass("animate2")})})}]).directive("directiveMenuResponsive",function(){return{restrict:"A",link:function(e,t,o){$(t).on("click",function(){$lista=$("#list-items"),$(".text-menu").hasClass("show")?($(".text-menu").removeClass("show").addClass("hide"),$("#menu-adapt").addClass("menu-transform")):(setTimeout(function(){$(".text-menu").removeClass("hide").addClass("show")},500),$("#menu-adapt").removeClass("menu-transform")),$lista.slideToggle("slow",function(){$("#list-items li").on("click",function(){$lista.hide()})})})}}}),angular.module("prueba.module",[]).controller("prueba.controller",["$scope","$rootScope","$http",function(e,t,o){e.url=""}]),angular.module("site.module",[]).controller("about.controller",["$scope",function(e){$(document).ready(function(){$(".icon-plus").on("click",function(){var e=$(this),t=$(this).attr("href");$(t).slideToggle("slow"),$(e).toggleClass("icon-rotate")}),$(window).scroll(function(){var e=$(window).scrollTop();for(console.log(scrol_pos+" scrol_before");e>50;)console.log(e+" scrol_afer")})})}]).controller("work.controller",["$scope","$http","servicesFactory",function(e,t,o){}]).controller("contact.controller",["$scope",function(e){}]),angular.module("services.module",[]).factory("servicesFactory",["$http",function(e){return{searchItem:function(t,o,r){return e.get(t+"/v1/search?q="+r+"&type="+o)},albumArtist:function(t,o){return e.get(t+"/v1/artists/"+o+"/albums")},albumTracks:function(t,o){return e.get(t+"/v1/albums/"+o+"/tracks")},infoFileDownload:function(t){return e.get(t)}}}]).directive("downloadBtn",["$compile","servicesFactory",function(e,t){return{restrict:"AE",scope:{fileName:"@"},template:'<button id="fileBtn" ng-click="getMyData()">Click here!</button>',link:function(e,o,r){e.getMyData=function(){t.infoFileDownload("https://api.spotify.com/v1/search?query=luis&offset=0&limit=20&type=artist").success(function(t){e.fileName=t,console.log(JSON.stringify(e.fileName),"esta es la respuesta de mi servicio")}).error(function(e){console.log(JSON.stringify(e),"se genero un error")})}}}}]),angular.module("music.module",[]).controller("music.controller",["$scope","$http","servicesFactory",function(e,t,o){e.baseUrl="https://api.spotify.com",e.artist="",e.type="artist",e.loader=!1,e.fail=!1,e.searchFor=function(t,r){o.searchItem(e.baseUrl,t,r).success(function(t){e.loader=!1,e.emptyArray=!1,e.artista="",e.artista=t.artists.items[0],void 0!==e.artista?(e.artist="",e.emptyArray=!1,e.img=e.artista.images[0].url,e.genres=e.artista.genres,e.idArtist=e.artista.id,e.artistName=e.artista.name,e.artistAlbum(e.idArtist),e.fail=!1):(e.artista=[],e.img="",e.genres=[],e.artistName="",e.emptyArray=!0,e.fail=!1,e.message="Artist not found, try once!")}).error(function(t){e.emptyArray=!0,e.message="",e.fail=!0,e.failMessage="Please, type a name in the box!",console.log("error D:")})},e.muestra=!1,e.showAll=function(){e.muestra=!0},e.albumTracks=function(t){e.muestra=!0,o.albumTracks(e.baseUrl,t).success(function(t){e.albumTracks=t.items}).error(function(e){console.log("tracks no : ")})},e.artistAlbum=function(t){o.albumArtist(e.baseUrl,t).success(function(t){e.albums=t.items}).error(function(e){console.log("album no : ")})}}]);