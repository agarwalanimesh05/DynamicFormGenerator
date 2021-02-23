Ext.define('TestApp.view.formPanel.FormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'TestApp.view.formPanel.FormPanelController',
        'TestApp.view.formPanel.FormPanelModel'
    ],
    xtype: 'customForm',

    controller: 'formpanel-formpanel',
    viewModel: {
        type: 'formpanel-formpanel'
    },
    layout: 'hbox',

    items: [{
        xtype: 'fieldset',
        layout: 'hbox',
        flex: 1,
        items: [{
            xtype: 'textfield',
            label: 'Label',
            name: 'Label',
            required: true,
            flex: 1,
            // validators: [Ext.create('Ext.data.validator.Email')]
        }, {
            xtype: 'selectfield',
            label: 'Data Field',
            name: 'dataField',
            required: true,
            flex: 1,
            options: [{
                text: 'Text',
                value: 'textfield'
            }, {
                text: 'Number',
                value: 'numberfield'
            }, {
                text: 'Password',
                value: 'passwordfield'
            }]
        }, {
            xtype: 'button',
            text: 'Add',
            itemId: 'addButton'
        }]
    }],

    initialize: function() {
        console.log('initialize');
    },


});