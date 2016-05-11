/*
 * prominstr_type.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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




function ModuleFactory_ProminstrType() {

    'use strict';

    return ( function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonType,
              theSS_IdentifierType,
              theSS_q) {


        var ModuleName     = "prominstr_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonType,
                                     theS_IdentifierType,
                                     $q) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGDEFERREDREJECT  = true;
                theToInit.LOGDEFERREDRESOLVE = true;
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
                theToInit.PROMINSTRUMENT_DEFAULTTITLE = "ProminstrDefaultName";


                theToInit.DEFERREDTYPE = "Deferred";





                theToInit.RESOLUTIONKIND_AJAX                = "AJAX";
                theToInit.RESOLUTIONKIND_WITHNOTHING         = "WITHNOTHING";
                theToInit.RESOLUTIONKIND_WITHNULL            = "WITHNULL";
                theToInit.RESOLUTIONKIND_WITHSOMETHING       = "WITHSOMETHING";
                theToInit.RESOLUTIONKIND_WITHRESPONSE        = "WITHRESPONSE";
                theToInit.RESOLUTIONKIND_WITHROWS            = "WITHROWS";
                theToInit.RESOLUTIONKIND_WITHFIELDS          = "WITHFIELDS";
                theToInit.RESOLUTIONKIND_WITHSELECTIONINDEX  = "WITHSELECTIONINDEX";
                theToInit.RESOLUTIONKIND_WHENINDOUBT         = "WHENINDOUBT";

                theToInit.RESOLUTIONKINDS = [
                    theToInit.RESOLUTIONKIND_AJAX,
                    theToInit.RESOLUTIONKIND_WITHNOTHING,
                    theToInit.RESOLUTIONKIND_WITHNULL,
                    theToInit.RESOLUTIONKIND_WITHSOMETHING,
                    theToInit.RESOLUTIONKIND_WITHRESPONSE,
                    theToInit.RESOLUTIONKIND_WITHROWS,
                    theToInit.RESOLUTIONKIND_WITHFIELDS,
                    theToInit.RESOLUTIONKIND_WITHSELECTIONINDEX,
                    theToInit.RESOLUTIONKIND_WHENINDOUBT
                ];


                theToInit.REJECTIONKIND_AJAXERROR         = "AJAXERROR";
                theToInit.REJECTIONKIND_ACTIONERROR       = "ACTIONERROR";

                theToInit.REJECTIONKINDS = [
                    theToInit.REJECTIONKIND_AJAXERROR,
                    theToInit.REJECTIONKIND_ACTIONERROR
                ];

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






            var aProminstr_Prototype = (function() {



                var aPrototype = new theS_CommonType.Common_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonType.Common_Prototype;



                aPrototype._v_Type = "Prominstr";

                aPrototype._v_Prototype_Prominstr = aPrototype;

                aPrototype._v_Module = null;


                aPrototype._v_DeferredsIdentifier = null;

                aPrototype._v_AllDeferreds      = null;
                aPrototype._v_PendingDeferreds  = null;
                aPrototype._v_ResolvedDeferreds = null;
                aPrototype._v_RejectedDeferreds = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_Prominstr( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.PROMINSTRUMENT_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_Prominstr = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_Common.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_DeferredsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");

                    this._v_AllDeferreds      = [ ];
                    this._v_PendingDeferreds  = [ ];
                    this._v_ResolvedDeferreds = [ ];
                    this._v_RejectedDeferreds = [ ];
                };
                if( _pInit_Prominstr){}/* CQT */
                aPrototype._pInit_Prominstr = _pInit_Prominstr;














                var fNewDeferred = function( theActor) {

                    var aDeferred = $q.defer();

                    this._v_AllDeferreds.push( aDeferred);

                    this._v_PendingDeferreds.push( aDeferred);

                    this.pDecorateNewDeferred( aDeferred, theActor);

                    return aDeferred;
                };
                if( fNewDeferred){}/* CQT */
                aPrototype.fNewDeferred = fNewDeferred;









                var pDecorateNewDeferred = function( theDeferred, theActor) {

                    if( !theDeferred) {
                        return;
                    }

                    this.pDecorateNewDeferred_withFields(  theDeferred, theActor);
                    this.pDecorateNewDeferred_withMethods( theDeferred);
                };
                if( pDecorateNewDeferred){}/* CQT */
                aPrototype.pDecorateNewDeferred = pDecorateNewDeferred;







                var pDecorateNewDeferred_withFields = function( theDeferred, theActor) {

                    if( !theDeferred) {
                        return;
                    }

                    theDeferred._v_Module = this._v_Module;
                    theDeferred._v_Type   = this.DEFERREDTYPE;
                    theDeferred._v_Id     = this.fReserveDeferredId();
                   
                    theDeferred._v_Resolution       = null;
                    theDeferred._v_ResolutionMode   = null;
                    theDeferred._v_Rejection        = null;
                    theDeferred._v_RejectionMode    = null;

                    theDeferred._v_PromiserActor  = theActor;
                    theDeferred._v_ContinuerActor = theActor;

                };
                if( pDecorateNewDeferred_withFields){}/* CQT */
                aPrototype.pDecorateNewDeferred_withFields = pDecorateNewDeferred_withFields;













                var pDecorateNewDeferred_withMethods = function( theDeferred) {

                    if( !theDeferred) {
                        return;
                    }



                    var fIdentifyingJSON = function() {

                        var aModuleFullName = null;
                        if( theDeferred._v_Module) {
                            aModuleFullName = theDeferred._v_Module.ModuleFullName;
                        }

                        var aIdentifiyingJSON = {
                            "module": aModuleFullName,
                            "type": theDeferred._v_Type,
                            "id":   theDeferred._v_Id
                        };


                        if( theDeferred._v_PromiserActor && ( typeof theDeferred._v_PromiserActor.fIdentifyingJSON == "function")) {
                            aIdentifiyingJSON[ "promiserActor"] = theDeferred._v_PromiserActor.fIdentifyingJSON();
                        }

                        if( theDeferred._v_ContinuerActor && ( typeof theDeferred._v_ContinuerActor.fIdentifyingJSON == "function")) {
                            aIdentifiyingJSON[ "continuerActor"] = theDeferred._v_ContinuerActor.fIdentifyingJSON();
                        }

                        return aIdentifiyingJSON;
                    };
                    if( fIdentifyingJSON){}/* CQT */
                    theDeferred.fIdentifyingJSON = fIdentifyingJSON.bind( theDeferred);






                    var fIdentifyingString = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingJSON();

                        var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                        if( aIdentifyingString){}/* CQT */

                        return aIdentifyingString;
                    };
                    if( fIdentifyingString){}/* CQT */
                    theDeferred.fIdentifyingString = fIdentifyingString.bind( theDeferred);







                    var fIdentifyingWithTitleJSON = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingJSON();
                        if( aIdentifyingJSON){}/* CQT */

                        return aIdentifyingJSON;
                    };
                    if( fIdentifyingWithTitleJSON){}/* CQT */
                    theDeferred.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON.bind( theDeferred);






                    var fIdentifyingWithTitleString = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingWithTitleJSON();

                        var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                        if( aIdentifyingString){}/* CQT */

                        return aIdentifyingString;
                    };
                    if( fIdentifyingWithTitleString){}/* CQT */
                    theDeferred.fIdentifyingWithTitleString = fIdentifyingWithTitleString.bind( theDeferred);







                    var fFullTypeNameString = function() {

                        var aFullTypeName = theDeferred._v_Module.ModuleFullName + "." + theDeferred._v_Type;


                        if( theDeferred._v_PromiserActor && ( typeof theDeferred._v_PromiserActor.fFullTypeNameString == "function")) {
                            aFullTypeName += ( " promiserActor" + theDeferred._v_PromiserActor.fFullTypeNameString());
                        }

                        if( theDeferred._v_ContinuerActor && ( typeof theDeferred._v_ContinuerActor.fIdentifyingJSON == "function")) {
                            aFullTypeName += ( " continuerActor" + theDeferred._v_ContinuerActor.fFullTypeNameString());
                        }

                        return aFullTypeName;
                    };
                    if( fFullTypeNameString){}/* CQT */
                    theDeferred.fFullTypeNameString = fFullTypeNameString.bind( theDeferred);







                    var fToResultJSON = function( theCommonObjects, theAlready) {
                        if( !( theAlready == null)) {
                            if( theAlready.fAlready( theDeferred)){
                                return theDeferred.fIdentifyingJSON();
                            }
                        }

                        var aResultJSON = theDeferred.fIdentifyingWithTitleJSON();
                        if( aResultJSON){}/* CQT */

                        return aResultJSON;
                    };
                    if( fToResultJSON){}/* CQT */
                    theDeferred.fToResultJSON = fToResultJSON.bind( theDeferred);









                    var fAsLogObject = function() {

                        var aLog = theDeferred.fIdentifyingWithTitleJSON();
                        if( aLog){}/* CQT */

                        return aLog;
                    };
                    if( fAsLogObject){}/* CQT */
                    theDeferred.fAsLogObject = fAsLogObject.bind( theDeferred);








                    var toString = function() {
                        return this.fIdentifyingWithTitleString();
                    };
                    if( toString){}/* CQT */
                    theDeferred.toString = toString.bind( theDeferred);






                };
                if( pDecorateNewDeferred_withMethods){}/* CQT */
                aPrototype.pDecorateNewDeferred_withMethods = pDecorateNewDeferred_withMethods;















                var fReserveDeferredId = function() {

                    if( !this._v_DeferredsIdentifier) {
                        return "IDwoIdentifier";
                    }

                    var aDeferredId = this._v_DeferredsIdentifier.fReserveId();
                    if( aDeferredId){}/* CQT */

                    return aDeferredId;
                };
                if( fReserveDeferredId){}/* CQT */
                aPrototype.fReserveDeferredId = fReserveDeferredId;








                var fRecordingObj = function( theActor) {
                    if( !theActor) {
                        return this;
                    }

                    if( !( typeof theActor.fRecord == "function")) {
                        return this;
                    }

                    return theActor;
                };
                if( fRecordingObj){}/* CQT */
                aPrototype.fRecordingObj = fRecordingObj;









                var fNewDeferredResolvePromise = function( theResolution, theResolutionKind, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolve( aDeferred, theResolution, theResolutionKind, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolvePromise){}/* CQT */
                aPrototype.fNewDeferredResolvePromise = fNewDeferredResolvePromise;






                
                
                



                var pDeferredResolve = function( theDeferred, theResolution, theResolutionKind, theActor) {

                    var aMethodName = "pDeferredResolve";


                    if( !theDeferred) {
                        if( this.LOGDEFERREDREJECT) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_WARN_NODEFERREDTORESOLVE, theDeferred, theResolutionKind, theResolution)
                        }
                        return;
                    }


                    if( this._v_ResolvedDeferreds.indexOf( theDeferred) >= 0) {
                        var aRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( aRecord);
                        */
                        console.log( aRecord);

                    }


                    if( this._v_RejectedDeferreds.indexOf( theDeferred) >= 0) {
                        var otherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( otherRecord);
                        */
                        console.log( otherRecord);
                    }



                    var aPendingDeferredIndex = this._v_PendingDeferreds.indexOf( theDeferred);
                    if( aPendingDeferredIndex < 0) {
                        var anotherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( anotherRecord);
                        */
                        console.log( anotherRecord);
                    }




                    theDeferred._v_ContinuerActor = theActor;



                    this._v_PendingDeferreds.splice( aPendingDeferredIndex, 1);

                    this._v_ResolvedDeferreds.push( theDeferred);


                    if( !( typeof theResolution == "undefined")) {
                        theDeferred._v_Resolution = theResolution;
                    }

                    if( !( typeof theResolutionKind == "undefined")) {
                        theDeferred._v_ResolutionKind = theResolutionKind;
                    }


                    if( this.LOGDEFERREDRESOLVE) {
                        this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_RESOLVED, theDeferred, theResolutionKind, theResolution);
                    }


                    if( typeof theResolution == "undefined") {
                        if( !theDeferred.resolve) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, "!!!!ERROR !theDeferred.resolve", theDeferred, theResolutionKind, theResolution);
                            return;
                        }

                        theDeferred.resolve();
                        return;
                    }

                    theDeferred.resolve( theResolution);

                };
                if( pDeferredResolve){}/* CQT */
                aPrototype.pDeferredResolve = pDeferredResolve;













                var fNewDeferredResolveWithNothingPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithNothing( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithNothingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNothingPromise = fNewDeferredResolveWithNothingPromise;





                var pDeferredResolveWithNothing = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, undefined, this.RESOLUTIONKIND_WITHNOTHING, theActor);

                };
                if( pDeferredResolveWithNothing){}/* CQT */
                aPrototype.pDeferredResolveWithNothing = pDeferredResolveWithNothing;









                var fNewDeferredResolveWithSomethingPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithSomething( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithSomethingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSomethingPromise = fNewDeferredResolveWithSomethingPromise;





                var pDeferredResolveWithSomething = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, undefined, this.RESOLUTIONKIND_WITHSOMETHING, theActor);

                };
                if( pDeferredResolveWithSomething){}/* CQT */
                aPrototype.pDeferredResolveWithSomething = pDeferredResolveWithSomething;







                var fNewDeferredResolveWithNullPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithNull( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithNullPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNullPromise = fNewDeferredResolveWithNullPromise;








                var pDeferredResolveWithNull = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, null, this.RESOLUTIONKIND_WITHNULL, theActor);

                };
                if( pDeferredResolveWithNull){}/* CQT */
                aPrototype.pDeferredResolveWithNull = pDeferredResolveWithNull;









                var fNewDeferredResolveWithResponsePromise = function( theResponse, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithResponse( aDeferred, theResponse, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithResponsePromise = fNewDeferredResolveWithResponsePromise;







                var pDeferredResolveWithResponse = function( theDeferred, theResponse, theActor) {

                    this.pDeferredResolve( theDeferred, theResponse, this.RESOLUTIONKIND_WITHRESPONSE, theActor);

                };
                if( pDeferredResolveWithResponse){}/* CQT */
                aPrototype.pDeferredResolveWithResponse = pDeferredResolveWithResponse;












                var fNewDeferredResolveWithRowsPromise = function( theRows, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithRows( aDeferred, theRows, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithRowsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithRowsPromise = fNewDeferredResolveWithRowsPromise;







                var pDeferredResolveWithRows = function( theDeferred, theRows, theActor) {

                    this.pDeferredResolve( theDeferred, theRows, this.RESOLUTIONKIND_WITHROWS, theActor);

                };
                if( pDeferredResolveWithRows){}/* CQT */
                aPrototype.pDeferredResolveWithRows = pDeferredResolveWithRows;














                var fNewDeferredResolveWithFieldsPromise = function( theFields, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithFields( aDeferred, theFields, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithFieldsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithFieldsPromise = fNewDeferredResolveWithFieldsPromise;









                var pDeferredResolveWithFields = function( theDeferred, theFields, theActor) {

                    this.pDeferredResolve( theDeferred, theFields, this.RESOLUTIONKIND_WITHFIELDS, theActor);

                };
                if( pDeferredResolveWithFields){}/* CQT */
                aPrototype.pDeferredResolveWithFields = pDeferredResolveWithFields;












                var fNewDeferredResolveWithSelectionIndexPromise = function( theSelectionIndex, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithSelectionIndex( aDeferred, theSelectionIndex, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithSelectionIndexPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSelectionIndexPromise = fNewDeferredResolveWithSelectionIndexPromise;







                var pDeferredResolveWithSelectionIndex = function( theDeferred, theSelectionIndex, theActor) {

                    this.pDeferredResolve( theDeferred, theSelectionIndex, this.RESOLUTIONKIND_WITHSELECTIONINDEX, theActor);

                };
                if( pDeferredResolveWithSelectionIndex){}/* CQT */
                aPrototype.pDeferredResolveWithSelectionIndex = pDeferredResolveWithSelectionIndex;












                var fNewDeferredResolveWhenInDoubtPromise = function( theSomething, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWhenInDoubt( aDeferred, theSomething, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWhenInDoubtPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWhenInDoubtPromise = fNewDeferredResolveWhenInDoubtPromise;







                var pDeferredResolveWhenInDoubt = function( theDeferred, theSomething, theActor) {

                    this.pDeferredResolve( theDeferred, theSomething, this.RESOLUTIONKIND_WHENINDOUBT, theActor);

                };
                if( pDeferredResolveWhenInDoubt){}/* CQT */
                aPrototype.pDeferredResolveWhenInDoubt = pDeferredResolveWhenInDoubt;



















                var fNewPromiseAll = function( thePromises, theActor) {

                    var aPromiseAll = $q.all( thePromises);
                    if( aPromiseAll){}/* CQT */

                    return aPromiseAll;
                };
                if( fNewPromiseAll){}/* CQT */
                aPrototype.fNewPromiseAll = fNewPromiseAll;












                var fNewDeferredRejectPromise = function( theRejection, theRejectionKind, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredReject( aDeferred, theRejection, theRejectionKind, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectPromise){}/* CQT */
                aPrototype.fNewDeferredRejectPromise = fNewDeferredRejectPromise;







                var pDeferredReject = function( theDeferred, theRejection, theRejectionKind, theActor) {

                    var aMethodName = "pDeferredReject";


                    if( !theDeferred) {
                        if( this.LOGDEFERREDREJECT) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_WARN_NODEFERREDTOREJECT, theDeferred, theRejectionKind, theRejection)
                        }
                        return;
                    }


                    if( this._v_ResolvedDeferreds.indexOf( theDeferred) >= 0) {
                        var aRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED, theDeferred, theRejectionKind, theRejection);
                        /*
                         throw new theS_ProminstrException.ProminstrException_Constructor( aRecord);*/
                        console.log( aRecord);
                    }


                    if( this._v_RejectedDeferreds.indexOf( theDeferred) >= 0) {
                        var otherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED, theDeferred, theRejectionKind, theRejection);
                        /*
                         throw new theS_ProminstrException.ProminstrException_Constructor( otherRecord);*/
                        console.log( otherRecord);
                    }



                    var aPendingDeferredIndex = this._v_PendingDeferreds.indexOf( theDeferred);
                    if( aPendingDeferredIndex < 0) {
                        var anotherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING, theDeferred, theRejectionKind, theRejection);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( anotherRecord);*/
                        console.log( anotherRecord);
                    }



                    theDeferred._v_ContinuerActor = theActor;
                    

                    this._v_PendingDeferreds.splice( aPendingDeferredIndex, 1);

                    this._v_RejectedDeferreds.push( theDeferred);

                    if( !( typeof theRejection == "undefined")) {
                        theDeferred._v_Rejection = theRejection;
                    }

                    if( !( typeof theRejectionKind == "undefined")) {
                        theDeferred._v_RejectionKind = theRejectionKind;
                    }


                    if( this.LOGDEFERREDREJECT) {
                        this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_REJECTED, theDeferred, theRejectionKind, theRejection);
                    }


                    if( typeof theRejection == "undefined") {
                        theDeferred.reject();
                        return;
                    }

                    theDeferred.reject( theRejection);

                };
                if( pDeferredReject){}/* CQT */
                aPrototype.pDeferredReject = pDeferredReject;











                var fNewDeferredResolveAjaxResponsePromise = function( theResolution, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveAjaxResponse( aDeferred, theResolution, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveAjaxResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveAjaxResponsePromise = fNewDeferredResolveAjaxResponsePromise;






                var pDeferredResolveAjaxResponse = function( theDeferred, theResolution, theActor) {

                    this.pDeferredResolve( theDeferred, theResolution, this.RESOLUTIONKIND_AJAX, theActor);

                };
                if( pDeferredResolveAjaxResponse){}/* CQT */
                aPrototype.pDeferredResolveAjaxResponse = pDeferredResolveAjaxResponse;







                var fNewDeferredRejectAjaxErrorPromise = function( theRejection, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredRejectAjaxError( aDeferred, theRejection, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectAjaxErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectAjaxErrorPromise = fNewDeferredRejectAjaxErrorPromise;






                var pDeferredRejectAjaxError = function( theDeferred, theRejection, theActor) {

                    this.pDeferredReject( theDeferred, theRejection, this.REJECTIONKIND_AJAXERROR, theActor);

                };
                if( pDeferredRejectAjaxError){}/* CQT */
                aPrototype.pDeferredRejectAjaxError = pDeferredRejectAjaxError;








                var fNewDeferredRejectActionErrorPromise = function( theRejection, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredRejectActionError( aDeferred, theRejection, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectActionErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectActionErrorPromise = fNewDeferredRejectActionErrorPromise;






                var pDeferredRejectActionError = function( theDeferred, theRejection, theActor) {

                    this.pDeferredReject( theDeferred, theRejection, this.REJECTIONKIND_ACTIONERROR, theActor);

                };
                if( pDeferredRejectActionError){}/* CQT */
                aPrototype.pDeferredRejectActionError = pDeferredRejectActionError;







                return aPrototype;

            })();




            var Prominstr_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_DeferredsIdentifier = null;

                this._v_AllDeferreds      = null;
                this._v_PendingDeferreds  = null;
                this._v_ResolvedDeferreds = null;
                this._v_RejectedDeferreds = null;

                this._pInit_Prominstr( theTitle, theIdentifier, theRecorder);
            };
            Prominstr_Constructor.prototype = aProminstr_Prototype;





            var Prominstr_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = aProminstr_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_DeferredsIdentifier = null;

                this._v_AllDeferreds      = null;
                this._v_PendingDeferreds  = null;
                this._v_ResolvedDeferreds = null;
                this._v_RejectedDeferreds = null;
            };
            Prominstr_SuperPrototypeConstructor.prototype = aProminstr_Prototype;



            var aModule = {
                "Prominstr_Prototype": aProminstr_Prototype,
                "Prominstr_Constructor": Prominstr_Constructor,
                "Prominstr_SuperPrototypeConstructor": Prominstr_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aProminstr_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonType,
                theSS_IdentifierType,
                /*
                theSS_ProminstrException,
                 */
                theSS_q
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_ProminstrType){}/* CQT */





