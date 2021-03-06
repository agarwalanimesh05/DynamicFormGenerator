/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'TestApp.view.formPanel.FormPanel'
    ],

    controller: 'main',
    viewModel: 'main',
    title: 'Dynamic Form Builder',

    items: [{
        xtype: 'customForm'
    }, {
        xtype: 'dynamicFormContainer'
    }]
});