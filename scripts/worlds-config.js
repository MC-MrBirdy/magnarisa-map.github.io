var worldsConfig = [
	{
		"id":0,
		"name":"Overworld",
		"path":"worlds/overworld",
		"type":"default",
		"xsize":12000,
		"ysize":12000,
		"markers":[
			{
				"name":"Homes",
				"path":"/homes.json",
				"default":true
			},
			{
				"name":"Warps",
				"path":"/warps.json",
				"raw":true,
				"default":false,
				"color":"yellow"
			},
			{
				"name":"Check",
				"path":"/check.json",
				"default":false,
				"alter":true
			}],
		"alter":{"Homes":["/time.json","/gone.json"]}
	},
	{
		"id":1,
		"name":"Nether",
		"path":"worlds/nether",
		"type":"other",
		"xsize":10000,
		"ysize":10000,
		"markers":[
			{
				"name":"Homes",
				"path":"/homes.json",
				"default":true
			},
			{
				"name":"Warps",
				"path":"/warps.json",
				"raw":true,
				"default":false,
				"color":"yellow"
			}]
	},
	{
		"id":2,
		"name":"Overworld October 2020",
		"path":"worlds/overworldoct20",
		"type":"archive",
		"xsize":12000,
		"ysize":12000,
		"markers":[
			{
				"name":"Homes",
				"path":"/homes.json",
				"default":true
			},
			{
				"name":"Warps",
				"path":"/warps.json",
				"default":false,
				"color":"yellow"
			}],
		"spawn":
			{
				"name":"Spawn",
				"x1":-298,
				"y1":673,
				"x2":702,
				"y2":-327,
				"color":"yellow",
				"opacity":0.15,
				"weight":1
			}
	},
	{
		"id":3,
		"name":"Overworld August 2021",
		"path":"worlds/overworldaug21",
		"type":"archive",
		"xsize":12000,
		"ysize":12000,
		"markers":[
			{
				"name":"Homes",
				"path":"/homes.json",
				"default":true
			},
			{
				"name":"Warps",
				"path":"/warps.json",
				"raw":true,
				"default":false,
				"color":"yellow"
			},
			{
				"name":"Check",
				"path":"/check.json",
				"default":false,
				"alter":true
			}],
		"alter":{"Homes":["/time.json","/gone.json"]}
	}
];