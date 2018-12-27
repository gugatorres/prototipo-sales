/* default Controller */
app.controller("defaultController", function($scope){
	
	$scope.titulo="Home"

	angular.element(".float-button-clientes").click(function(){
		angular.element(".overlay-add-customer").css("display","block");
		angular.element(this).css("z-index","999");
		angular.element("body").css("overflow-y", "hidden");
	});
	
	angular.element(".overlay-add-customer").click(function(){
		angular.element(this).css("display","none");
		angular.element(".float-button-clientes").css("z-index","2");
		angular.element("body").css("overflow-y", "hidden");
	});
	angular.element(".search").addClass("sync");
	angular.element(".sync").removeClass("search");
	angular.element(".bar-customer-back").css("display","none");
	angular.element(".sync img").attr("src","images/cloud.svg");
	
	
/* minha Rota Controller */
}).controller("minhaRotaController", function($scope){
	
	$scope.titulo="Minha Rota"
	angular.element(".bar-customer-back").css("display","none");
	angular.element(".sync img").attr("src","images/search_w.svg");

/* meus Clientes Controller */
}).controller("meusClientesController", function($scope){
	
	$scope.titulo="Meus Clientes"

	angular.element(".float-button-clientes").click(function(){
		angular.element(".overlay-add-customer").css("display","block");
		angular.element(this).css("z-index","999");
		angular.element("body").css("overflow-y", "hidden");
	});
	
	angular.element(".overlay-add-customer").click(function(){
		angular.element(this).css("display","none");
		angular.element(".float-button-clientes").css("z-index","2");
		angular.element("body").css("overflow-y", "auto");
	});

	angular.element(".bar-customer-back").css("display","none");
	angular.element(".sync img").attr("src","images/search_w.svg");
	angular.element(".sync").addClass("search");
	angular.element(".sync").removeClass("sync");
	

/* cep Cadastro Clientes Controller */
}).controller("cepCadastroClientesController", function($scope){
	
	$scope.titulo="CEP Cadastro de Clientes"

	angular.element(".bar-customer-back").css("display","none");
	angular.element(".sync img").attr("src","images/search_w.svg");
	angular.element(".sync").addClass("search");
	angular.element(".sync").removeClass("sync");
	//angular.element(".search img").removeAttr("src");

/* detalhe Clientes Controller */
}).controller("detalheClientesController", function($scope){
	
	$scope.titulo="Detalhe de Clientes"

	angular.element(".tab-1").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-1").css("display","block");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-2").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-2").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-3").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
		angular.element(".tab-page-3").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-4").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
		angular.element(".tab-page-4").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
	});

	angular.element(".bar-customer-back").css("display","block");
	
	
/* cadastro Clientes Controller */
}).controller("cadastroClientesController", function($scope){
	
	$scope.titulo="Cadastro de Clientes"

	angular.element(".tab-1").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-1").css("display","block");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-2").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-2").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-3").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
		angular.element(".tab-page-3").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-4").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
		angular.element(".tab-page-4").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
	});

	angular.element(".link-btn-tab2").click(function(){
		angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-2").addClass("active");
		angular.element(".tab-page-2").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});

	angular.element(".link-btn-tab3").click(function(){
		angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
		angular.element(".tab-3").addClass("active");
		angular.element(".tab-page-3").css("display","block");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});

	angular.element(".btn-finalizar").click(function(){
		angular.element(".overlay-modal").css("display","block");
	});

	angular.element(".overlay-modal").click(function(){
		angular.element(this).css("display","none");
	});

	angular.element(".bar-customer-back").css("display","block");

	angular.element(".menu-photo").click(function(){
		angular.element(".screen-photo").css("display","block");
		});

	angular.element(".close-screen-photo").click(function(){
		angular.element(".screen-photo").css("display","none");
		});

/* catalogo Produtos Controller */
}).controller("catalogoProdutosController", function($scope){
	
	$scope.titulo="Catalogo de Produtos"
	angular.element(".sync img").attr("src","images/search_w.svg");
	angular.element(".sync").addClass("search");
	angular.element(".sync").removeClass("sync");

	angular.element(".bar-customer-back").css("display","none");
	angular.element(".float-button-grid").addClass("image-grid");

	angular.element(".float-button-grid").click(function(){
		angular.element(this).toggleClass("image-list");
		angular.element(".box-product").toggleClass("product-grid");
		
		})



/* estoque Precos Controller */
}).controller("estoquePrecosController", function($scope){
	
	$scope.titulo="Estoque Preços"


/* relatorios Controller */
}).controller("relatoriosController", function($scope){
	
	$scope.titulo="Relatórios"


/* agendar Visita Controller */
}).controller("agendarVisitaController", function($scope){
	
	$scope.titulo="Agendar Visita"

	/* Splash Controller */
}).controller("splashController", function($scope){
	
	$scope.titulo="Splash"

   /* Splash Controller */
}).controller("loginController", function($scope){
	
	$scope.titulo="Login"

});