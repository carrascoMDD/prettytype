/*
 * testserver.js
 *
 * Created @author Antonio Carrasco Valero 201805111532
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

var gracefulExit = require('express-graceful-exit');
app.use(gracefulExit.middleware(app));


app.use(serveStatic(path.join(__dirname, '../../bower_components/nomod/src')));
app.use(serveStatic(path.join(__dirname, '../../src')));
app.use(serveStatic(path.join(__dirname, 'app')));

app.get('/close', function(req, res) {
    if( !server) {
        console.log( "Already down !?!");
        res.send( "Already down !?!");
    }
    else {
        console.log( "Closing");
        res.send('Goodbye!');
        gracefulExit.gracefulExitHandler(app, server, {
            // socketio: app.settings.socketio,
            suicideTimeout: 3000,
            exitDelay:      1000,
            log:            true,
            logger: function( theMsg) {
                console.log( theMsg);
            }
        });
        
        /*
        server.close( function() {
            console.log( "testserver closed. exiting ...");
            process.exit( 1);
        });
     */
    
    }
});

var server = app.listen(3000);
gracefulExit.init(server);


