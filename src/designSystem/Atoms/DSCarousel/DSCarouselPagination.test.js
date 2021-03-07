import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import DSCarouselPagination from "./DSCarouselPagination"
import {View} from "react-native"

describe("test carousel paging",()=>{
    it("carousel paging snapshot",()=>{
        const wrapper=renderer.create(<DSCarouselPagination total={3} currentPage={1} />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test carousel paging current page',()=>{
        const wrapper=renderer.create(
            <DSCarouselPagination total={3} currentPage={1} />
        )
        expect(wrapper.root.findAllByType(View)[1].props.style[1].backgroundColor!==null).toEqual(true)
        expect(wrapper.root.findAllByType(View)[2].props.style[1].backgroundColor===null).toEqual(true)
    })
})