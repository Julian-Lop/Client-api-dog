import React from 'react'
import {configure,mount} from 'enzyme'
import Createdog from '../components/Createdog'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import store from '../store'

configure({adapter: new Adapter()})

describe('Dogdetail', () => {
    let wrapper
    beforeEach(()=>{
        wrapper = mount(<Provider store={store}><Createdog/></Provider>)
    })
    it('deberia tener un <h4> con Borboel', () => {
        expect(wrapper.find('h1').text()).toEqual('CreateDog')
    })
    it('deberia tener un form',()=>{
        expect(wrapper.find('form'))
    })
    it('deberia tener un input con id nombre', ()=>{
        expect(wrapper.find('input[id="nombre"]')).toHaveLength(1)
    })
    it('deberia tener un input con id alturamin', ()=>{
        expect(wrapper.find('input[id="alturamin"]')).toHaveLength(1)
    })
    it('deberia tener un input con id alturamax', ()=>{
        expect(wrapper.find('input[id="alturamax"]')).toHaveLength(1)
    })
    it('deberia tener un input con id pesomin', ()=>{
        expect(wrapper.find('input[id="pesomin"]')).toHaveLength(1)
    })
    it('deberia tener un input con id pesomax', ()=>{
        expect(wrapper.find('input[id="pesomax"]')).toHaveLength(1)
    })
    it('deberia tener un select para los temperamentos', ()=>{
        expect(wrapper.find('select')).toHaveLength(1)
    })
    it('deberia tener un textarea para ver los temperamentos agregados', ()=>{
        expect(wrapper.find('textarea')).toHaveLength(1)
    })
    it('deberia tener un input con id vida', ()=>{
        expect(wrapper.find('input[id="vida"]')).toHaveLength(1)
    })
    it('deberia tener un input de para enviar con type submit', ()=>{
        expect(wrapper.find('input[type="submit"]')).toHaveLength(1)
    })
})