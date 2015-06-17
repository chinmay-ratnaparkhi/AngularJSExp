(function(){
	var app = angular.module('store', []);

	app.controller('storeController', function(){
		this.products= myGems;
	})

	app.controller('PanelController',function(){
		this.tab=1;
		this.setTab= function(val){
			this.tab= val;
		}
		this.isSelected= function(val){
			return val == this.tab;
		}
	})

	app.controller('reviewController',function(){

		this.review={};
		this.solidify= function(holder){
			holder.reviews.push(this.review);
			this.review={};
		}
	})
	var myGems= [

	{

		name: "Chinmay's Gem",
		price: 5,
		description: "Chinmay created a gem and is now selling it to the world for only $5. Check it out right now!",
		purchasable : true,
		soldout : false,
		reviews : [
			{
				stars:5,
				comment:'This first product is very beautiful and durable.',
				name:'Chinmay',
			},
			{
				stars:2,
				comment:'No complaints, but I was expecting a lot more. Irony. Lol.',
				name:'IronicChinmay',
			}


		],
	},

	{

		name: "Chinmay's Second Gem",
		price: 15,
		description: "Chinmay created another gem and is now selling it to the world for only $15. Check it out right now!",
		purchasable : true,
		soldout : false,
		reviews : [
			{
				stars:5,
				comment:'This first product is very beautiful and durable.',
				name:'Chinmay',
			},
			{
				stars:2,
				comment:'No complaints, but I was expecting a lot more. Irony. Lol.',
				name:'IronicChinmay',
			}


		],
	},



	];

})();
