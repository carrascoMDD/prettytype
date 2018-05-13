'use strict';

/*
 * widget_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201410112053
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused. licensed under EUPL  http://www.uiwire.org

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






angular.module('reuseCtrlTypes').controller( 'ReuseCtrl', [
    'ReuseCtrlType',
    "IdentifierSvce",
    "RecorderSvce",
    '$scope',
    function ( theSS_ReuseCtrlType,
               theSS_IdentifierSvce,
               theSS_RecorderSvce,
               $scope) {


        /* Used in an AngularJS template to obtain the keys of the first element of a list,
         to render the column header labels, and to retrieve column values for each row.
         */
        $scope.Object = Object;
        $scope.JSON = JSON;
        $scope.Date = Date;


        $scope.candidatesCtrl = new theSS_ReuseCtrlType.ReuseCtrl_Constructor(
            "Reuse_Controller",
            theSS_IdentifierSvce,
            theSS_RecorderSvce,
            $scope,
            "ReuseCtrl-" /* theDomIdPrefix */
        );

        $scope.candidatesCtrl.fprDo_Initial();


    }]);


