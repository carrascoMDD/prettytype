//Este fichero, y el package.json hay que sacarlos del proyecto y colocarlos en una carpeta fuera del git.
//Una vez en esa carpeta se modifica para actualizar la variable js_root y poner la ruta donde tenemos cada uno los js del moduloTecnicos
//y en el fichero moduloTecnicos.xml (que es un fichero de ant) se indica la ruta donde se han sacado estos dos ficheros (gruntfile.js y package.json)
//en la línea: <arg line="/c cd C:/disenio/geoplagas/grunt/moduloTecnicos" /> que está por el principio.
module.exports = function(grunt) {
	
	var js_root = grunt.option('path_js');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),
    watch: {
		scripts: {
			
			files: [ 
			         js_root + '/../campos.js',
			         js_root + '/../shared/directives/directives.js', 
			         js_root + '/../shared/directives/sh*.js',
			         js_root + '/../shared/filters/filters.js', 
			         js_root + '/../shared/filters/*Filter.js',
			         js_root + '/../shared/services/services.js',
			         js_root + '/../shared/services/shconfig.js',
			         js_root + '/../shared/services/*Service.js',
			         js_root + '/directives/directives.js',
			         js_root + '/directives/mt*.js',
			         js_root + '/services/services.js',
			         js_root + '/services/config.js',
			         js_root + '/services/*Service.js',
			         js_root + '/controllers/controllers.js',
			         js_root + '/controllers/*Controller.js',
			         js_root + '/app.js'
			         ],
			         
			tasks: ['concat', 'uglify'],
			
			options: {

				spawn:false,
				event:['all']
			},
		},
	},
	concat : {
	  options : {
		separator: ';',
	    sourceMap :true
	  },
	  dist : {
	    src  : [ 
	             js_root + '/../campos.js',
	             js_root + '/../shared/directives/directives.js', 
		         js_root + '/../shared/directives/sh*.js',
		         js_root + '/../shared/filters/filters.js', 
		         js_root + '/../shared/filters/*Filter.js',
		         js_root + '/../shared/services/services.js',
		         js_root + '/../shared/services/shconfig.js',
		         js_root + '/../shared/services/*Service.js',
		         js_root + '/directives/directives.js',
		         js_root + '/directives/mt*.js',
		         js_root + '/services/services.js',
		         js_root + '/services/config.js',
		         js_root + '/services/*Service.js',
		         js_root + '/controllers/controllers.js',
		         js_root + '/controllers/*Controller.js',
		         js_root + '/app.js' 
		        ],
	    dest : js_root + '/../prettytype.js'
	  }
	},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapIn : js_root + '/../prettytype.js.map'
      },
      build: {
        src: '<%= concat.dist.dest %>',
        dest: js_root + '/../prettytype.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};