jest.dontMock('../index.js');

var FormBuilderComponent = require('../index.js').FormBuilderComponent;

describe('FormBuilderComponent', () => {

    describe('getFormSchema()', () => {
        var formBuilder;

        beforeEach(() => {
            const props = {
                store: {
                    getState: () => {}
                },
                actions: {},
                formSchemaUrl: 'admin/assets/schema/1',
                schema: { forms: [{ schema: { id: '1', schema_url: 'admin/assets/schema/1' } }] }
            };

            formBuilder = new FormBuilderComponent(props);
        });

        it('should return the form schema for the FormBuilder', () => {
            const form = formBuilder.getFormSchema();
            expect(form.schema.id).toBe('1');
        });
    });

});