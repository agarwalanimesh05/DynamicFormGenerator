Ext.define('TestApp.view.dynamicFieldContainer.DynamicFieldContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dynamicfieldcontainer-dynamicfieldcontainer',

    config: {

        viewConfig: [],

        control: {
            "button[itemId=deleteButton]": {
                tap: "onDeleteButtonTap"
            },
            "button[itemId=submitButton]": {
                tap: "onSubmitButtonTap"
            }
        },

    },


    addDataToDynamicPanel: function(label, dataField) {

        let field = this.createField(label, dataField),
            container = this.getView().down('#dynamicPanel'),
            itemId = dataField + label;

        container.add(field);

        this.getViewConfig().push({ label, dataField, itemId })

        if (this.getViewConfig().length === 1) {
            this.getView().setHidden(false);
        }
    },

    createField: function(label, dataField) {

        const itemId = dataField + label;
        let field = Ext.create({
            xtype: 'container',
            itemId: itemId,
            layout: 'hbox',
            cls: 'textFieldContainer',

            items: [{
                xtype: dataField,
                label: label,
                flex: 1,
                itemId: `${itemId}Field`,
            }, {
                xtype: 'button',
                iconCls: 'md-icon-delete',
                itemId: 'deleteButton'
            }]

        })

        return field;
    },

    onDeleteButtonTap: function(button, e) {

        const fieldContainer = button.getParent(),
            itemId = fieldContainer.getItemId();

        fieldContainer.destroy();

        let array = this.getViewConfig().filter((element) => element.itemId !== itemId);

        this.setViewConfig(array);

        if (array.length === 0) {
            this.getView().setHidden(true);
        }
    },

    onSubmitButtonTap: function(button, e) {

        let json = JSON.stringify(this.getViewConfig());

        console.log(json);
    }

});