(function (){
	var app= angular.module('store', []);
	
	app.controller('storeController', function(){
		this.products= gems;	
 	});

 	app.controller('tabController',function(){
 		this.tab= 1;
 		this.isCurrent= function(me){
 			return this.tab == me;
 		}
 		this.makeMeActive= function(me){
 			this.tab=me;
 		}
 	});



 	app.controller('reviewController', function(){
 		this.demo= {};
 		this.formSubmission= function(product){
 			product.reviews.push(this.demo)
 			this.demo= {};
 		}
 	});



	var gems= [

	{
		name: 'Ruby',
		price: 55,
		description:'A ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide). The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red. ',
		soldout: false,
		canPurchase: true,
		images: {
			full: "images/Ruby.jpg",
			thum: "images/Ruby2.jpg",
		},
		reviews: [
			{
				stars:3,
				comment: "I don't know, I'm just not a big fan of red things!",
				author: 'RossGeller@friends.com',
			},
			{
				stars:4,
				comment: "Nobody likes this? It's like the smelly cat of Gems!",
				author: 'phoebe@friends.com',
			}
		],

		specs: 'Specifications to be listed. Please refer to to the description in the meanwhile.',
	},

	{
		name: 'Sapphire',
		price: 65,
		description:'Sapphire which probably referred instead at the time to lapis lazuli) is a typically blue gemstone variety of the mineral corundum, an aluminium oxide (α-Al2O3). ',
		soldout: false,
		canPurchase: true,
		images: {
			full: "images/Sapphire.png",
			thum: "images/Sapphire2.jpg",
		},
		reviews: [
			{
				stars:5,
				comment: 'This product really helped me with my inner ear problem. I feel much better now.',
				author: 'jackMcFarland@wag.com',
			},
			{
				stars:4,
				comment: "Oh honey, I don't do online reviews!",
				author: 'KarenWalker@wag.com',
			}
		],
		specs: 'Specifications to be listed. Please refer to to the description in the meanwhile.',
		
	},

	{
		name: 'Diamond',
		price: 95,
		description:'In mineralogy, diamond is a metastable allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond lattice.',
		soldout: false,
		canPurchase: true,
		images: {
			full: "images/Diamond.png",
			thum: "images/Diamond2.png",
		},
		reviews: [
			{
				stars:5,
				comment: "This gem is legen-wait-for-it-dary!",
				author: 'barney@himym.com',
			},
			{
				stars:4,
				comment: "So sophisticated! I would love to paint it!!!",
				author: 'aldrinJustice@himym.com',
			}
		],
		specs: 'Specifications to be listed. Please refer to to the description in the meanwhile.',
	},

	];
})();