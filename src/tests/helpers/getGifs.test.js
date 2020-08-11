import { getGifs } from "../../helpers/getGifs"

describe("Pruebas con getGifs Fetch", () => {
  test("debe traer 10 elementos ", async () => {
    const gifs = await getGifs("Goku")
    expect(gifs.length).toBe(10)
  })
  test("Puede no traer ningun elemento ", async () => {
    const gifs = await getGifs("")
    expect(gifs.length).toBe(0)
  })
})
