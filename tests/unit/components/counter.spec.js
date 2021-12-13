import {shallowMount,mount} from '@vue/test-utils'
import Counter from '@/components/Counter'
describe('Counter component',()=>{
//Test para capturar el html y verificar su modificacion
//En el caso de actualizar la prueba y el codigo haya sido modificado ejecutar 
// el comando: yarn test:unit -u      
//Que actualizara el html almacenado con update(-u)

    /* test('debe de hacer match con el snapchot',()=>{
      
        const wrapper= shallowMount(Counter)
        
        expect(wrapper.html()).toMatchSnapshot()  
    }) */
    test('h2 debe de tener el valor por defecto "Counter" ', () => {
        const wrapper= shallowMount(Counter)
        //Verificamos que exista 
        //y que el valor sea true cuando exista (toBeTruthy)
        //o puedes escribir toBe(true) 
        expect(wrapper.find('h2').exists()).toBeTruthy()
        //El findALl captura muchos parrafos q referencien al argumento q se busque
        //En el uso de find solo me trae al primero q encuentre

        const h2=wrapper.find('h2')
        console.log(h2.text())
        //Comparamos que lo que recibe es Counter dentro de la etiqueta de h2
        expect(h2.text()).toBe('Counter')
    })
    
});
