Ext.define('TestApp.view.dynamicFieldContainer.DynamicFieldContainer', {
    extend: 'Ext.panel.Panel',

    requires: [
        'TestApp.view.dynamicFieldContainer.DynamicFieldContainerController',
        'TestApp.view.dynamicFieldContainer.DynamicFieldContainerModel'
    ],

    controller: 'dynamicfieldcontainer-dynamicfieldcontainer',
    viewModel: {
        type: 'dynamicfieldcontainer-dynamicfieldcontainer'
    },

    xtype: 'dynamicFormContainer',
    cls: 'dynamicFormContainer',

    title: 'Form Container',
    titleAlign: 'center',
    hidden: true,

    items: [{
        xtype: 'container',
        itemId: 'dynamicPanel',
        cls: 'fieldContainer'
    }, {
        xtype: 'button',
        text: 'Submit Button',
        itemId: 'submitButton',
        cls: 'submitButton'
    }],

    addData: function(label, dataField) {

        this.getController().addDataToDynamicPanel(label, dataField);
    }
});