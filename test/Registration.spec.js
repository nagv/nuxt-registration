import { mount } from '@vue/test-utils'
import Registration from '@/components/Registration.vue'

describe('Registration', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Registration)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Make sure input text present in the form', () => {

    const wrapper = mount(Registration)
    
    const textInput = wrapper.find('input[type="text"]')

    expect(textInput.exists()).toBe(true)
  })


  test('Make sure email input present in the form', () => {

    const wrapper = mount(Registration)

    //const fullname = wrapper.find('#fullName')

    //expect(fullname.exists()).toBe(true)

    //expect(fullname.element.id).toBe('fullName')


    

    const emailInput = wrapper.find('input[type="email"]')

    expect(emailInput.exists()).toBe(true)


    

  


    //const firstName = wrapper.find({name:'v-text-field'});
    
       // expect(firstName.name()).toBe(true)
  })

  test('Make sure text area is present in the form', () => {

    const wrapper = mount(Registration)
    
    const textAreaInput = wrapper.find('textArea')

    expect(textAreaInput.exists()).toBe(true)
  })
})
