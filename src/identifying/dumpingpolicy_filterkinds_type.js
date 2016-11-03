/*
 * dumpingpolicy_filterkinds_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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





function ModuleFactory_DumpingPolicyFilterKindsType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_DumpingPolicyType,
                       theSS_CommonEventKinds) {


        var ModuleName     = "dumpingpolicy_filterkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_DumpingPolicyType,
                                     theS_CommonEventKinds) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = true;



                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";

                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {



                if( !theToInit) {
                    return;
                }
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";




                if( theToInit.EVENTSSETNOTFORCONSOLE) {

                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE == "string") {
                        var anEventsSetNotForConsole = theS_CommonEventKinds[ theToInit.EVENTSSETNOTFORCONSOLE];
                        if( anEventsSetNotForConsole) {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                    }
                }
                else {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aDumpingPolicyFilterKinds_Prototype = (function() {



                var aPrototype = new theS_DumpingPolicyType.DumpingPolicy_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;


                aPrototype._v_Type = "DumpingPolicyFilterKinds";

                aPrototype._v_Prototype_DumpingPolicyFilterKinds = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_EventKindsNotForConsole = null;


                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                if( aPrototype.EVENTKINDS_NOTFORCONSOLE) {
                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE.slice();
                }






                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_DumpingPolicyFilterKinds = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_DumpingPolicyFilterKinds){}/* CQT */
                aPrototype._pInit_DumpingPolicyFilterKinds = _pInit_DumpingPolicyFilterKinds;

















                var fSetEventKindsNotForConsole_inPrototype = function( theEventKinds) {

                    aPrototype._v_EventKindsNotForConsole = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_inPrototype = fSetEventKindsNotForConsole_inPrototype;





                var fFewerEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fFewerEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsForConsole_inPrototype = fFewerEventKindsForConsole_inPrototype;







                var fMoreEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fMoreEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsForConsole_inPrototype = fMoreEventKindsForConsole_inPrototype;



















                var fSetEventKindsNotForConsole = function( theEventKinds) {

                    this._v_EventKindsNotForConsole = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;










                var fFewerEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole
                };
                if( fFewerEventKindsForConsole){}/* CQT */
                aPrototype.fFewerEventKindsForConsole = fFewerEventKindsForConsole;










                var fMoreEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole
                };
                if( fMoreEventKindsForConsole){}/* CQT */
                aPrototype.fMoreEventKindsForConsole = fMoreEventKindsForConsole;


















                var fMustDumpRecord = function( theRecord) {

                    if( !theRecord) {
                        return false;
                    }

                    if( !this.fMayDumpRecords()) {
                        return false;
                    }


                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }

                    var someEventKindsNotForConsole = this.fEventKindsNotForConsole();
                    if( !someEventKindsNotForConsole) {
                        return true;
                    }

                    if( someEventKindsNotForConsole.indexOf( anEventKind) < 0) {
                        return true;
                    }

                    return false;

                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;







                var fEventKindsNotForConsole = function() {

                    /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsNotForConsole */
                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {

                        if( !this._v_EventKindsNotForConsole) {
                            return null;
                        }

                        return this._v_EventKindsNotForConsole;
                    }



                    if( !this._v_EventKindsNotForConsole) {
                        return null;
                    }

                    return this._v_EventKindsNotForConsole;

                };
                if( fEventKindsNotForConsole){}/* CQT */
                aPrototype.fEventKindsNotForConsole = fEventKindsNotForConsole;





                var pRelease = function() {

                    this._v_Prototype_DumpingPolicy.pRelease.apply( this);

                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {
                        delete( this._v_EventKindsNotForConsole);
                    }

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;





                return aPrototype;

            })();




            var DumpingPolicyFilterKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

                this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyFilterKinds_Constructor.prototype = aDumpingPolicyFilterKinds_Prototype;





            var DumpingPolicyFilterKinds_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;

                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

            };
            DumpingPolicyFilterKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyFilterKinds_Prototype;



            var aModule = {
                "DumpingPolicyFilterKinds_Prototype":                 aDumpingPolicyFilterKinds_Prototype,
                "DumpingPolicyFilterKinds_Constructor":               DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicy_Constructor":                          DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDumpingPolicyFilterKinds_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_DumpingPolicyType,
                theSS_CommonEventKinds
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_DumpingPolicyFilterKindsType){}/* CQT */



