import React from "react"
import { shallow } from "enzyme"
import "@testing-library/jest-dom"
import { GifGridItem } from "../../components/GifGridItem"

describe("Pruebas en GifGridItem", () => {
  const title = "Un titulo"
  const url = "https://localhost/alog.jpg"
  let wrapper = shallow(<GifGridItem title={title} url={url} />)

  test("Debe mostrar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("Debe de tener un parrafo con el ttitle ", () => {
    const p = wrapper.find("p")
    expect(p.text().trim()).toBe(title)
  })

  test("Debe de tener la imagen igual al url y alt de los pros ", () => {
    const img = wrapper.find("img")
    expect(img.prop("src")).toBe(url)
    expect(img.prop("alt")).toBe(title)
  })
  test('Debe tener animate__fadeIn ', () => {
    const div = wrapper.find("div")
    const className = div.prop("className")
    expect(className.includes("animate__fadeIn")).toBe(true)
  })
  
})
