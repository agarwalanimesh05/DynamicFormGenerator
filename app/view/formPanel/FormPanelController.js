Ext.define('TestApp.view.formPanel.FormPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel-formpanel',

    control: {
        "button[itemId=addButton]": {
            tap: "_onAdd"
        }
    },

    initialize: function() {},

    _onAdd: function(event) {

        console.log('FormPanelController -> _onAdd');

        const form = this.getView(),
            view = this.getView();

        form.validate();

        const isFormValid = form.isValid();

        if (isFormValid) {

            const label = view.down('textfield').getValue(),
                dataField = view.down('selectfield').getValue();

            if (label && dataField) {

                view.getParent().down('dynamicFormContainer').addData(label, dataField);
            }

            form.reset();

        }
    }

});