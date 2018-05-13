
/*
 te2est-traversals-type.js refactoring of tes2est-traversals.js  to be Angular-agnostic , originally copy of traversals.js in te2est asyncshell project
 Creado 201505182205
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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
 */

(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider){
        
    
        var ComponentName    = "prettytype";
        var ModuleName     = "traversals";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    
        var aMod_builder = function( theS_Overrider) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
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
            if( theS_Overrider) {
                theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            }
        
        
        
        
        
        
        
        
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
            
            
                theToInit.ROOTPATHSTEPSYMBOL = "#root";
            
            
                theToInit.SPECPATHROOTPATHSTEPSYMBOL = "#testsroot";
            
            
                theToInit.PATHSREPLACEABLESYMBOL = "#";
            
            
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
            
            
                theToInit.TRAVERSAL_WHOLE = "*";
            
                theToInit.TRAVERSALSTEPSSEPARATOR = ".";
            
                theToInit.TRAVERSALSTEP_LENGTH = "length";
                theToInit.TRAVERSALSTEP_LAST   = "last";
                theToInit.TRAVERSALSTEP_FIRST  = "first";
                theToInit.TRAVERSALSTEP_ALL    = "all";
            
            
                theToInit.TRAVERSALSTEP_KEYEDSEPARATOR  = "=";
            
                theToInit.REPLACEPARMVALUEWITHPARMPREFIX = "~";
            
                theToInit.REPLACEPARMVALUEDOT = ".";
            
            
            
                theToInit.ANYEXCEPTION = "*";
            
            
                theToInit.VALUEDIFFATTOP = "/";
            
            
                theToInit.SYMBOLICSTEPREGEXPSTR = "^\\?(\\w+)\\=(\\-?[0-9]+)$";
                theToInit.SYMBOLICSTEPREGEXP    = new RegExp( theToInit.SYMBOLICSTEPREGEXPSTR);
            
                theToInit.KEYEDSTEPREGEXPSTR = "^\\#(\\-?[0-9]+)$";
                theToInit.KEYEDSTEPREGEXP    = new RegExp( theToInit.KEYEDSTEPREGEXPSTR);
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
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
                var aParmValueLen = theParmValue.length;
                if( !aParmValueLen) {
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                if( aParmValueLen < 2) {
                    return theParmValue;
                }
            
                if( theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT) > 0) {
                    return fgParmValueReplacement_DotNotation( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( !theConfiguration) {
                    return theParmValue;
                }
            
                var aReplacementValue = theParmValue;
            
                var otherReplacementParmName = theParmValue.substring( 1);
            
                var otherParmsToResolve = [ otherReplacementParmName];
            
                var otherParmResolutionsDict = theConfiguration.fParmResolutionsByName( otherParmsToResolve, theMapForStepsWithParmPrefix);
                if( otherParmResolutionsDict) {
                
                    var otherReplacementResolution = otherParmResolutionsDict[ otherReplacementParmName];
                    if( otherReplacementResolution && otherReplacementResolution._v_Success) {
                        aReplacementValue = otherReplacementResolution._v_ParmValue;
                    }
                }
            
                return aReplacementValue;
            };
            if( fgParmValueReplacement){}/* CQT */
            aModule.fgParmValueReplacement = fgParmValueReplacement;
        
        
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement_DotNotation= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
            
                var aParmValueLen = theParmValue.length;
                if( aParmValueLen < 4) { /* expresion minima es ~x.y  */
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                var aDotIndex = theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT);
                if( aDotIndex < 0) {
                    return fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( aDotIndex < 2) {
                    return theParmValue;
                }
            
            
            
                var aReplacementParmNameWOdot = theParmValue.substring( 0, aDotIndex);
                var aParmValueAfterDot        = theParmValue.substring( aDotIndex + 1);
            
                /* Unused 201805122138
                var aReplacementParmNameWOdotWoPrefix = aReplacementParmNameWOdot.substring( 1);
                 */
            
                var aParmValueReplacementWoDot = fgParmValueReplacement( theConfiguration, aReplacementParmNameWOdot, theMapForStepsWithParmPrefix);
            
                if( ( typeof aParmValueReplacementWoDot === "undefined")
                    || ( aParmValueReplacementWoDot == null)
                    || !( typeof aParmValueReplacementWoDot === "object") ) {
                
                    return aParmValueReplacementWoDot;
                }
            
                if( aDotIndex >= ( aParmValueLen - 1)) {
                    return aParmValueReplacementWoDot;
                }
            
                if( !aParmValueAfterDot) {
                    return aParmValueReplacementWoDot;
                }
            
            
                var aTraversalResult = fgTraverseToFromValue( aParmValueAfterDot, aParmValueReplacementWoDot, theMapForStepsWithParmPrefix);
                if( !( typeof aTraversalResult === "object") || ( aTraversalResult == null)) {
                    return aTraversalResult;
                }
            
                var aReplacementResult = aTraversalResult[ "value"];
                if( aReplacementResult){}/* CQT */
                return aReplacementResult;
            };
            if( fgParmValueReplacement_DotNotation){}/* CQT */
            aModule.fgParmValueReplacement_DotNotation = fgParmValueReplacement_DotNotation;
        
        
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValue = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return { "name": theSourceSteps, "value": theValue};
                }
            
                if( !theValue) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
            
            
            
            
            
                var aStepName = someCheckSourceSteps[ 0].trim();
            
            
            
                if( aNumCheckSourceSteps === 1) {
                
                    if( aStepName === aModule.TRAVERSALSTEP_LENGTH) {
                        return { "value": theValue.length};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_FIRST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ 0]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_LAST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ theValue.length - 1]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_ALL) {
                        if( !theValue.length) {
                            return { "value": []};
                        }
                        return { "value": theValue};
                    }
                
                
                
                
                    var aKeyedSeparatorIndex = aStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                    if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aStepName.length - 1))) {
                        var aValueLen = theValue.length;
                        if( !aValueLen) {
                            return null;
                        }
                        var aKeyName  = aStepName.slice( 0, aKeyedSeparatorIndex);
                        var aKeyValue = aStepName.slice( aKeyedSeparatorIndex);
                        if( !aKeyName || !aKeyValue) {
                            return null;
                        }
                        var aMatchingParmValueElem = null;
                        for( var aValueElemIdx=0; aValueElemIdx < aValueLen; aValueElemIdx++) {
                            var aValueElem = theValue[ aValueElemIdx];
                            if( !aValueElem) {
                                continue;
                            }
                            if( !( typeof aValueElem === "object")) {
                                continue;
                            }
                            if( !aValueElem.hasOwnProperty( aKeyName)) {
                                continue;
                            }
                            var aValueElemKeyedValue    = aValueElem[ aKeyName];
                            if( !aValueElemKeyedValue) {
                                continue;
                            }
                            var aValueElemKeyedValueStr = aValueElemKeyedValue;
                            if( !( typeof aValueElemKeyedValueStr === "string")) {
                                aValueElemKeyedValueStr = new String( aValueElemKeyedValue);
                            }
                            if( !( aValueElemKeyedValueStr === aKeyValue)) {
                                continue;
                            }
                            aMatchingParmValueElem = aValueElem;
                            break;
                        }
                    
                        if( typeof aMatchingParmValueElem === "undefined") {
                            return  null;
                        }
                        if( aMatchingParmValueElem == null) {
                            return null;
                        }
                    
                        return { "value": aMatchingParmValueElem};
                    }
                
                
                
                
                
                    var aReplacedSingleStepName = aStepName;
                    if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                    
                        var aSingleStepNameWoPrefix = aStepName.slice( 1);
                        if( aSingleStepNameWoPrefix) {
                        
                            var aSingleParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSingleStepNameWoPrefix];
                        
                            if( typeof aSingleParmResolutionForStepWithParmPrefix === "undefined") {
                                return null;
                            }
                        
                            aReplacedSingleStepName = aSingleParmResolutionForStepWithParmPrefix;
                        }
                    }
                
                
                
                    var aOneStepTestValue = theValue[ aReplacedSingleStepName];
                
                    if( typeof aOneStepTestValue === "undefined") {
                        return  null;
                    }
                
                    return { "value": aOneStepTestValue};
                }
            
            
            
            
            
            
            
            
                var aReplacedStepName = aStepName;
                if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aStepNameWoPrefix = aStepName.slice( 1);
                    if( aStepNameWoPrefix) {
                    
                        var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aStepNameWoPrefix];
                    
                        if( typeof aParmResolutionForStepWithParmPrefix === "undefined") {
                            return null;
                        }
                    
                        aReplacedStepName = aParmResolutionForStepWithParmPrefix;
                    }
                }
            
            
                var aTestValue = theValue[ aReplacedStepName];
                if( typeof aTestValue === "undefined") {
                    return  null;
                }
            
                if( aTestValue == null) {
                    return  null;
                }
            
            
            
            
                var aNumStepsToTraverse = aNumCheckSourceSteps - 1;
            
                var aSubStepValue = aTestValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                    var aSubStepName = someCheckSourceSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepName = aSubStepName.trim();
                    
                        if( aSubStepName === aModule.TRAVERSALSTEP_LENGTH) {
                            return { "value": aSubStepValue.length};
                        }
                        else {
                            if( aSubStepName === aModule.TRAVERSALSTEP_FIRST) {
                                if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ 0];
                            }
                            else {
                                if( aSubStepName === aModule.TRAVERSALSTEP_LAST) {
                                    if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                        return null;
                                    }
                                    aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                                }
                                else {
                                
                                    if( aSubStepName === aModule.TRAVERSALSTEP_ALL) {
                                        if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                            return { "value": []};
                                        }
                                    
                                        var someStepsToCollect = someCheckSourceSteps.slice( aSubStepIdx + 1);
                                    
                                        var someCollected = [ ];
                                    
                                        var someToCollect = aSubStepValue.slice();
                                        var aNumToCollect = someToCollect.length;
                                        for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {
                                        
                                            var aToCollect = someToCollect[ aToCollectIdx];
                                        
                                            var aCollectedTraversalResult = fgTraverseToFromValue( someStepsToCollect, aToCollect);
                                        
                                            if( aCollectedTraversalResult) {
                                                var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                                someCollected.push( aCollectedTraversalValue);
                                            }
                                        }
                                    
                                        return { "value": someCollected};
                                    }
                                    else {
                                    
                                        var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                                        if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                            var aSubStepParmValueLen = aSubStepValue.length;
                                            if( !aSubStepParmValueLen) {
                                                return null;
                                            }
                                            var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                            var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex + 1);
                                            if( !aSubStepKeyName || !aSubStepKeyValue) {
                                                return null;
                                            }
                                            var aSubStepMatchingParmValueElem = null;
                                            for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                                var aSubStepParmValueElem = aSubStepValue[ aSubStepParmValueElemIdx];
                                                if( !aSubStepParmValueElem) {
                                                    continue;
                                                }
                                                if( !( typeof aSubStepParmValueElem === "object")) {
                                                    continue;
                                                }
                                                if( !aSubStepParmValueElem.hasOwnProperty( aSubStepKeyName)) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValue    = aSubStepParmValueElem[ aSubStepKeyName];
                                                if( !aSubStepParmValueElemKeyedValue) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValueStr = aSubStepParmValueElemKeyedValue;
                                                if( !( typeof aSubStepParmValueElemKeyedValueStr === "string")) {
                                                    aSubStepParmValueElemKeyedValueStr = new String( aSubStepParmValueElemKeyedValue);
                                                }
                                                if( !( aSubStepParmValueElemKeyedValueStr === aSubStepKeyValue)) {
                                                    continue;
                                                }
                                                aSubStepMatchingParmValueElem = aSubStepParmValueElem;
                                                break;
                                            }
                                        
                                            if( typeof aSubStepMatchingParmValueElem === "undefined") {
                                                return null;
                                            }
                                        
                                            if( aSubStepMatchingParmValueElem == null) {
                                                return null;
                                            }
                                        
                                            aSubStepValue = aSubStepMatchingParmValueElem;
                                        }
                                    
                                    
                                    
                                    
                                        else {
                                            var aReplacedSubStepName = aSubStepName;
                                        
                                            if( aSubStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                                            
                                                var aSubStepNameWoPrefix = aSubStepName.slice( 1);
                                            
                                                var aParmResolutionForSubStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSubStepNameWoPrefix];
                                                if( typeof aParmResolutionForSubStepWithParmPrefix === "undefined") {
                                                    return null;
                                                }
                                            
                                                aReplacedSubStepName = aParmResolutionForSubStepWithParmPrefix;
                                            }
                                        
                                            aSubStepValue = aSubStepValue[ aReplacedSubStepName];
                                        }
                                    }
                                }
                            }
                        }
                    
                    
                        if( typeof aSubStepValue === "undefined") {
                            return null;
                        }
                    
                    
                        if( aSubStepValue == null) {
                            return { "value": null};
                        }
                    
                    }
                }
            
            
                if( aSubStepValue == null) {
                    return { "value": null};
                }
            
            
                var aLastStepName = someCheckSourceSteps[ aNumCheckSourceSteps - 1];
                if( !aLastStepName) {
                    return null;
                }
                aLastStepName = aLastStepName.trim();
                if( !aLastStepName) {
                    return null;
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LENGTH) {
                    return { "value": aSubStepValue.length};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_FIRST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ 0]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LAST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ aSubStepValue.length - 1]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_ALL) {
                    if( !aSubStepValue.length) {
                        return { "value": []};
                    }
                    return { "value": aSubStepValue};
                }
            
            
            
                var aLastKeyedSeparatorIndex = aLastStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                if ( ( aLastKeyedSeparatorIndex > 0) && ( aLastKeyedSeparatorIndex < ( aLastStepName.length - 1))) {
                    var aLastValueLen = aSubStepValue.length;
                    if( !aLastValueLen) {
                        return null;
                    }
                    var aLastKeyName  = aLastStepName.slice( 0, aLastKeyedSeparatorIndex);
                    var aLastKeyValue = aLastStepName.slice( aLastKeyedSeparatorIndex);
                    if( !aKeyName || !aKeyValue) {
                        return null;
                    }
                    var aLastMatchingParmValueElem = null;
                    for( var aLastValueElemIdx=0; aLastValueElemIdx < aLastValueLen; aLastValueElemIdx++) {
                        var aLastValueElem = aSubStepValue[ aLastValueElemIdx];
                        if( !aLastValueElem) {
                            continue;
                        }
                        if( !( typeof aLastValueElem === "object")) {
                            continue;
                        }
                        if( !aLastValueElem.hasOwnProperty( aLastKeyName)) {
                            continue;
                        }
                        var aLastValueElemKeyedValue    = aLastValueElem[ aLastKeyName];
                        if( !aLastValueElemKeyedValue) {
                            continue;
                        }
                        var aLastValueElemKeyedValueStr = aLastValueElemKeyedValue;
                        if( !( typeof aLastValueElemKeyedValueStr === "string")) {
                            aLastValueElemKeyedValueStr = new String( aLastValueElemKeyedValue);
                        }
                        if( !( aLastValueElemKeyedValueStr === aLastKeyValue)) {
                            continue;
                        }
                        aLastMatchingParmValueElem = aLastValueElem;
                        break;
                    }
                
                    if( typeof aLastMatchingParmValueElem === "undefined") {
                        return null;
                    }
                
                    if( aLastMatchingParmValueElem == null) {
                        return null;
                    }
                
                    return { "value": aLastMatchingParmValueElem};
                }
            
            
            
            
                var aReplacedLastStepName = aLastStepName;
            
                if( aLastStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aLastStepNameWoPrefix = aLastStepName.slice( 1);
                
                    var aParmResolutionForLastStepWithParmPrefix = theMapForStepsWithParmPrefix[ aLastStepNameWoPrefix];
                    if( typeof aParmResolutionForLastStepWithParmPrefix === "undefined") {
                        return null;
                    }
                
                    aReplacedLastStepName = aParmResolutionForLastStepWithParmPrefix;
                }
            
            
                var aLastStepTestValue = aSubStepValue[ aReplacedLastStepName];
                if( typeof aLastStepTestValue === "undefined") {
                    return  null;
                }
            
                return { "value": aLastStepTestValue};
            };
            if( fgTraverseToFromValue){}/* CQT */
            aModule.fgTraverseToFromValue = fgTraverseToFromValue;
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValueReturnValueOrNull = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
            
                var aTraversalResult = fgTraverseToFromValue( theSourceSteps, theValue, theMapForStepsWithParmPrefix);
                if( !aTraversalResult) {
                    return null;
                }
            
                var aTraversalValue = aTraversalResult[ "value"];
                if( aTraversalValue){}/* CQT */
            
                return aTraversalValue;
            
            };
            if( fgTraverseToFromValueReturnValueOrNull){}/* CQT */
            aModule.fgTraverseToFromValueReturnValueOrNull = fgTraverseToFromValueReturnValueOrNull;
        
        
        
        
        
        
        
        
        
            var fgHasAnyStepsWithParmPrefix = function( theSourceSteps) {
            
                if( !theSourceSteps) {
                    return false;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return false;
                }
            
                if( theSourceSteps.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {
                    return false;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return false;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return false;
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                            return true;
                        }
                    }
                }
            
                return false;
            };
            if( fgHasAnyStepsWithParmPrefix){}/* CQT */
            aModule.fgHasAnyStepsWithParmPrefix = fgHasAnyStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgStepsWithParmPrefix = function( theSourceSteps, theStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
                var someStepsWithParmPrefix = theStepsWithParmPrefix;
                if( ( someStepsWithParmPrefix == null) || !( typeof someStepsWithParmPrefix === "object") || !( typeof someStepsWithParmPrefix.length === "number")) {
                    someStepsWithParmPrefix = [ ];
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                        
                            var aStepForWithParmPrefixWoPrefix = aStepForWithParmPrefix.substring( 1);
                            if( aStepForWithParmPrefixWoPrefix) {
                                if( someStepsWithParmPrefix.indexOf( aStepForWithParmPrefixWoPrefix) < 0) {
                                    someStepsWithParmPrefix.push( aStepForWithParmPrefixWoPrefix);
                                }
                            }
                        }
                    }
                }
            
                var aNumStepsWithParmPrefix = someStepsWithParmPrefix.length;
                if( !aNumStepsWithParmPrefix) {
                    return null;
                }
            
            
                return someStepsWithParmPrefix;
            };
            if( fgStepsWithParmPrefix){}/* CQT */
            aModule.fgStepsWithParmPrefix = fgStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgFirstDiff = function( theActualValue, theCheckValue) {
            
                var aDiff = fgFirstDiff_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
    
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
                
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
                
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiff){}/* CQT */
            aModule.fgFirstDiff = fgFirstDiff;
    
    
    
    
            var fgFirstDiff_inner = function( theActualValue, theCheckValue) {
        
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
        
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
        
        
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                    Just remains to drill down into an object list elements or keyed properties
                     */
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
        
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
            
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
            
            
                    /* It is a list, theCheckValue is also a list*/
            
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
            
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
                
                        var aSubsListDiff = fgFirstDiff_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                    
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
    
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                    
                            aSubsListDiff.push( aSubIdx);
                    
                            return aSubsListDiff;
                        }
                    }
            
                    return null;
                }
        
        
        
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
                var someOneKeys   = Object.keys( theActualValue);
                var someOtherKeys = Object.keys( theCheckValue);
        
        
                var allKeys = someOneKeys.slice();
                var aNumOtherKeys = someOtherKeys.length;
        
                for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                    var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                    if( allKeys.indexOf( aOtherKey) < 0) {
                        allKeys.push( aOtherKey);
                    }
                }
                allKeys.sort();
        
        
                var aNumKeys = allKeys.length;
        
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = allKeys[ aKeyIdx];
            
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
            
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
            
                    var aSubsDiff = fgFirstDiff_inner( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
                
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                
                        return aSubsDiff;
                    }
                }
        
        
                return null;
            };
            if( fgFirstDiff_inner){}/* CQT */
            aModule.fgFirstDiff_inner = fgFirstDiff_inner;
    
    
    
    
    
    
    
    
            var fgFirstDiffFromLeft = function( theActualValue, theCheckValue) {
        
                var aDiff = fgFirstDiffFromLeft_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
        
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
        
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiffFromLeft){}/* CQT */
            aModule.fgFirstDiffFromLeft = fgFirstDiffFromLeft;
    
    
    
    
    
            var fgFirstDiffFromLeft_inner = function( theActualValue, theCheckValue) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                       Just remains to drill down into an object list elements or keyed properties
                    */
                    return aModule.VALUEDIFFATTOP;
                }
    
    
    
    
    
    
    
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
    
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
        
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
        
        
                    /* It is a list, theCheckValue is also a list*/
        
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
        
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
            
                        var aSubsListDiff = fgFirstDiffFromLeft_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
                
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                
                            aSubsListDiff.push( aSubIdx);
                
                            return aSubsListDiff;
                        }
                    }
        
                    return null;
                }
    
    
    
    
    
    
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
    
                var someKeys   = Object.keys( theCheckValue);
            
                var aNumKeys = someKeys.length;
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
                
                    var aSubsDiff = fgFirstDiffFromLeft( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                    
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
    
    
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                    
                        return aSubsDiff;
                    }
                }
            
                return null;
            };
            if( fgFirstDiffFromLeft_inner){}/* CQT */
            aModule.fgFirstDiffFromLeft_inner = fgFirstDiffFromLeft_inner;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgAllDiffs = function( theActualValue, theCheckValue, theIgnoreKeys, theIgnorePaths) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( typeof theActualValue === "undefined") {
                    return [ fNewVoidDiff( "undefined", "UNCHECKED", "undefined", "UNCHECKED")];
                }
            
                if( typeof theCheckValue === "undefined") {
                    return [ fNewVoidDiff( theActualValue, "undefined", "something", "undefined")];
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( theActualValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "null", "something")];
                }
            
                if( theCheckValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "something", "null")];
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, typeof theActualValue, typeof theCheckValue)];
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                
                    if( !( typeof theCheckValue === "string")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a string")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                
                    if( !( typeof theCheckValue === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a number")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                
                    if( !( typeof theCheckValue === "boolean")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a boolean")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
    
    
                if( typeof theActualValue === "function" ) {
        
                    if( !( typeof theCheckValue === "function")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a function")];
                    }
        
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
                
    
                if( !( typeof theActualValue === "object" )) {
                    return [ fNewVoidDiff( "an object", "UNCHECKED")];
                }
            
            
                if( !( typeof theCheckValue === "object" )) {
                    return [ fNewVoidDiff( "an object'", "not an object")];
                }
            
            
            
            
            
            
                var allDiffs = [ ];
            
            
            
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
            
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number")) {
                
                    if( !( typeof aOneLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "not an array", "UNCHECKED")];
                    }
                
                    if( !( typeof aOtherLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "an array", "not an array")];
                    }
                
                    if( !( aOneLen === aOtherLen)) {
                        allDiffs.push( fNewVoidDiff( theActualValue, theCheckValue, "LEN=" + aOneLen, "LEN=" + aOtherLen));
                    }
                
                    var aMaxLen = Math.max( aOneLen, aOtherLen);
                
                    if( aMaxLen) {
                    
                        for( var aSubIdx=0; aSubIdx < aMaxLen; aSubIdx++) {
                        
                            var aOneListSub   = undefined;
                            var aOtherListSub = undefined;
                        
                            if( aSubIdx < aOneLen) {
                                aOneListSub   = theActualValue[ aSubIdx];
                            }
                        
                            if( aSubIdx < aOtherLen) {
                                aOtherListSub   = theCheckValue[ aSubIdx];
                            }
                        
                        
                            var someSubsListDiffs = fgAllDiffs( aOneListSub, aOtherListSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsListDiffs) {
                            
                                pUnshiftDiffsPath( someSubsListDiffs, aSubIdx);
                            
                                Array.prototype.push.apply( allDiffs, someSubsListDiffs);
                            }
                        }
                    }
                }
            
            
            
            
            
            
                var someOneKeysPossiblyWithNumbers   = Object.keys( theActualValue);
                var someOtherKeyPossiblyWithNumbers = Object.keys( theCheckValue);
            
                if( !( typeof someOneKeysPossiblyWithNumbers === "undefined") && !( typeof someOtherKeyPossiblyWithNumbers === "undefined")) {
                
                    var someOneKeys   = aModule.fgExcludeNumberStrings( someOneKeysPossiblyWithNumbers);
                    var someOtherKeys = aModule.fgExcludeNumberStrings( someOtherKeyPossiblyWithNumbers);
                
                
                    var allKeys = someOneKeys.slice();
                    var aNumOtherKeys = someOtherKeys.length;
                
                    for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                        var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                        if( allKeys.indexOf( aOtherKey) < 0) {
                            allKeys.push( aOtherKey);
                        }
                    }
                    allKeys.sort();
                
                
                    var aNumKeys = allKeys.length;
                
                    if( aNumKeys) {
                        for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                            var aKey = allKeys[ aKeyIdx];
                        
                            if( theIgnoreKeys && ( theIgnoreKeys.indexOf( aKey) >=0)) {
                                continue;
                            }
                        
                            var aOneSub   = undefined;
                            var aOtherSub = undefined;
                        
                            if( theActualValue.hasOwnProperty( aKey)) {
                                aOneSub   = theActualValue[ aKey];
                            }
                        
                            if( theCheckValue.hasOwnProperty( aKey)) {
                                aOtherSub = theCheckValue[ aKey];
                            }
                        
                            var someSubsDiffs = fgAllDiffs( aOneSub, aOtherSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsDiffs) {
                            
                                pUnshiftDiffsPath( someSubsDiffs, aKey);
                            
                                Array.prototype.push.apply( allDiffs, someSubsDiffs);
                            }
                        }
                    }
                }
            
            
                var aNumAllDiffs = allDiffs.length;
                if( !aNumAllDiffs) {
                    return null;
                }
            
                return allDiffs;
            };
            if( fgAllDiffs){}/* CQT */
            aModule.fgAllDiffs = fgAllDiffs;
        
        
        
        
        
        
        
            var fNewVoidDiff = function( theOneValue, theOtherValue, theOneDisplay, theOtherDisplay) {
            
                var aDiff = {
                    "oneValue":     theOneValue,
                    "otherValue":   theOtherValue,
                    "oneDisplay":   theOneDisplay,
                    "otherDisplay": theOtherDisplay,
                    "path":         undefined,
                    "diffKind":     null
                };
                if( aDiff){}/* CQT */
            
                return aDiff;
            };
        
        
        
        
        
        
        
        
        
            var fgExcludeNumberStrings = function( theStrings) {
            
                if( !theStrings) {
                    return theStrings;
                }
            
                var aNumStrings   = theStrings.length;
                if( !aNumStrings) {
                    return theStrings;
                }
            
                var someNotNumberStrings = [ ];
            
                for( var aOneStringIdx=0; aOneStringIdx < aNumStrings; aOneStringIdx++) {
                
                    var aOneString = theStrings[ aOneStringIdx];
                    if( aOneString) {
                    
                        var aIsNumber = false;
                        try {
                            var aNumber = parseInt( aOneString);
                            aIsNumber = !isNaN( aNumber);
                        }
                        catch( anException) {}
                        if( !aIsNumber) {
                            someNotNumberStrings.push( aOneString);
                        }
                    }
                }
            
                return someNotNumberStrings;
            
            };
            if( fgExcludeNumberStrings){}/* CQT */
            aModule.fgExcludeNumberStrings = fgExcludeNumberStrings;
        
        
        
        
        
        
        
            var pUnshiftDiffsPath = function( theDiffs, theToUnshift) {
            
                if( !theDiffs) {
                    return;
                }
            
                var aNumDiffs = theDiffs.length;
                if( !aNumDiffs) {
                    return;
                }
            
                if( typeof theToUnshift === "undefined") {
                    return;
                }
            
                if( theToUnshift == null) {
                    return;
                }
            
            
                for( var aDiffIdx=0; aDiffIdx < aNumDiffs; aDiffIdx++) {
                    var aDiff = theDiffs[ aDiffIdx];
                    if( aDiff) {
                    
                        var aPath = aDiff[ "path"];
                        if( !( typeof aPath === "object")) {
                            aDiff[ "path"] = [ theToUnshift];
                        }
                        else {
                            aPath.unshift( theToUnshift);
                        
                        }
                    }
                }
            };
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPath = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                        aSubStepValue = aSubStepValue[ aSubStepName];
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPath){}/* CQT */
            aModule.fgSetValueAtPath = fgSetValueAtPath;
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPathSymbolic = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                    
                        aSubStepValue = aModule.fgSymbolicGet( aSubStepValue, aSubStepName);
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPathSymbolic){}/* CQT */
            aModule.fgSetValueAtPathSymbolic = fgSetValueAtPathSymbolic;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSymbolicGet = function( theTarget, theStep) {
            
                var aSymbolicStepMatch = aModule.SYMBOLICSTEPREGEXP.exec( theStep);
            
                if( !aSymbolicStepMatch) {
                
                    var aGetValue = theTarget[ theStep];
                    if( aGetValue){}/* CQT */
                    return aGetValue;
                }
            
            
                var aSymbolicKey   = aSymbolicStepMatch[ 1];
                var aSymbolicValue = aSymbolicStepMatch[ 2];
            
                if( !aSymbolicKey) {
                    return undefined;
                }
            
                if( typeof aSymbolicValue === "undefined") {
                    return undefined;
                }
            
            
                var aTargetLength = theTarget.length;
                if( !( typeof aTargetLength === "number")) {
                    return undefined;
                }
            
            
                for( var aTargetIdx=0; aTargetIdx < aTargetLength; aTargetIdx++) {
                
                    var aTarget = theTarget[ aTargetIdx];
                    if( aTarget && ( typeof aTarget === "object")) {
                    
                        var aTargetSearch = aTarget[ aSymbolicKey];
                        if( !( typeof aTargetSearch === "undefined")) {
                        
                            if( aTargetSearch === aSymbolicValue) {
                            
                                return aTarget;
                            }
                        }
                    }
                }
            
                return undefined;
            
            };
            if( fgSymbolicGet){}/* CQT */
            aModule.fgSymbolicGet = fgSymbolicGet;
        
        
        
        
        
        
        
        
            var fgDeepCopy = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
            
                if( typeof theSource.length === "number") {
                    return aModule.fgDeepCopy_List( theSource)
                }
            
            
                return aModule.fgDeepCopy_Object( theSource)
            
            };
            if( fgDeepCopy){}/* CQT */
            aModule.fgDeepCopy = fgDeepCopy;
        
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_List = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aNumElements = theSource.length;
            
                if( !( typeof aNumElements === "number")) {
                    return undefined;
                }
            
            
                var aDeepCopy = [ ];
            
                for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {
                
                    var anElement = theSource[ anElementIdx];
                
                    if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                        aDeepCopy.push( anElement);
                        continue;
                    }
                
                    var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                    if( aDeepCopiedElement){}/* CQT */
                
                    aDeepCopy.push( aDeepCopiedElement);
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_List){}/* CQT */
            aModule.fgDeepCopy_List = fgDeepCopy_List;
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_Object = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aDeepCopy = { };
            
                var someKeys = Object.keys( theSource);
                if( !someKeys) {
                    return aDeepCopy;
                }
            
                var aNumKeys = someKeys.length;
                if( !aNumKeys) {
                    return theSource;
                }
            
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                
                    var aKey = someKeys[ aKeyIdx];
                
                    var aKeyInt = undefined;
                    try {
                        aKeyInt = parseInt( aKey);
                    }
                    catch( anException) {
                    }
                    if( ( typeof aKeyInt === "number") && !isNaN( aKeyInt)) {
                        continue;
                    }
                
                
                    if( theSource.hasOwnProperty( aKey)) {
                    
                        var anElement = theSource[ aKey];
                    
                        if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                            aDeepCopy[ aKey] = anElement;
                            continue;
                        }
                    
                        var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                        if( aDeepCopiedElement){}/* CQT */
                    
                        aDeepCopy[ aKey] = aDeepCopiedElement;
                    }
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_Object){}/* CQT */
            aModule.fgDeepCopy_Object = fgDeepCopy_Object;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey = function( theList, theKeyPropertyName) {
            
                if( !theList) {
                    return {};
                }
            
                if( !theKeyPropertyName) {
                    return {};
                }
            
                var aDict = { };
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( ( typeof anElem === "object") && !( anElem == null)) {
                    
                        var aKey = anElem[ theKeyPropertyName];
                        if( ( typeof aKey === "number") || ( typeof aKey === "string") || ( typeof aKey === "boolean")) {
                        
                            aDict[ aKey] = anElem;
                        }
                    }
                }
            
                return aDict;
            
            };
            if( fgDictFromListByKey){}/* CQT */
            aModule.fDictFromListByKey = fgDictFromListByKey;
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey_AsLists = function( theList, theKeyPptyName) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPptyName) {
                    return {};
                }
            
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aKey = anElem[ theKeyPptyName];
                        if( !( typeof aKey === "undefined") && !( aKey == null)) {
                        
                        
                            var someForKey = aDict[ aKey];
                            if( !someForKey) {
                                someForKey = [ ];
                                aDict[ aKey] = someForKey;
                            }
                        
                            if( someForKey.indexOf( anElem) < 0) {
                                someForKey.push( anElem);
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKey_AsLists){}/* CQT */
            aModule.fgDictFromListByKey_AsLists = fgDictFromListByKey_AsLists;
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKeyPath = function( theList, theKeyPath) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPath) {
                    return {};
                }
            
                if( theKeyPath.indexOf( ".") < 0) {
                    return fgDictFromListByKey_AsLists( theList, theKeyPath);
                }
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                    
                        var aTraversalResult = theSS_Te2estTraversals.fgTraverseToFromValue( theKeyPath, anElem);
                        if( aTraversalResult) {
                        
                            var aKey = aTraversalResult[ "value"];
                            if( !( typeof aKey === "undefined") && !( aKey == null)) {
                            
                                aDict[ aKey] = anElem;
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKeyPath){}/* CQT */
            aModule.fgDictFromListByKeyPath = fgDictFromListByKeyPath;
        
        
        
        
        
        
        
        
        
            var fgCollectProperty = function( theList, thePptyName) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePptyName) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePptyName) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aValue = anElem[ thePptyName];
                        if( !( typeof aValue === "undefined") && !( aValue == null)) {
                        
                            if( aList.indexOf( aValue) < 0) {
                                aList.push( aValue);
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectProperty){}/* CQT */
            aModule.fgCollectProperty = fgCollectProperty;
        
        
        
        
        
        
        
        
            var pgPushIntoIfNotAlready = function( theTargetList, theSourceList) {
            
                if( !theTargetList) {
                    return;
                }
            
                if( !theSourceList) {
                    return;
                }
            
                var aNumElems = theSourceList.length;
                if( !aNumElems) {
                    return;
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theSourceList[ anElemIdx];
                    if( !(typeof anElem === "undefined")) {
                    
                        if( theTargetList.indexOf( anElem) < 0) {
                            theTargetList.push( anElem);
                        }
                    }
                
                }
            };
            if( pgPushIntoIfNotAlready){}/* CQT */
            aModule.pgPushIntoIfNotAlready = pgPushIntoIfNotAlready;
        
        
        
        
        
        
        
        
        
        
            var fgCollectPath = function( theList, thePath) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePath) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aTraversalResult = theS_Te2estTraversals.fgTraverseToFromValue( thePath, anElem);
                        if( aTraversalResult) {
                            var aValue = aTraversalResult[ "value"];
                        
                            if( !( typeof aValue === "undefined") && !( aValue == null)) {
                            
                                if( aList.indexOf( aValue) < 0) {
                                    aList.push( aValue);
                                }
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectPath){}/* CQT */
            aModule.fgCollectPath = fgCollectPath;
        
        
        
        
        
        
        
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
    
        return anExistingModule;
    
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("traversals", [ 'typesRegistry', 'modbootTypes']).factory("Traversals",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_traversals", [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer
           );
    }
    
})();



