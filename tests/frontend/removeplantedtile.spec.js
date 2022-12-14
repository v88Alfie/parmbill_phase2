// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('remove_planted_tile', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('remove_planted_tile', async function() {
    // Test name: remove_planted_tile
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5501/bahay_cube.html | 
    await driver.get("http://127.0.0.1:5501/bahay_cube.html")
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 6 | click | css=.plant_btn | 
    await driver.findElement(By.css(".plant_btn")).click()
    // 7 | click | xpath=//label[@id='potato_crop'] | 
    await driver.findElement(By.xpath("//label[@id=\'potato_crop\']")).click()
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 10 | verifyElementPresent | css=.has_plant | 
    {
      const elements = await driver.findElements(By.css(".has_plant"))
      assert(elements.length)
    }
    // 11 | click | css=.remove_btn | 
    await driver.findElement(By.css(".remove_btn")).click()
    // 12 | click | css=.remove_modal_remove_btn | 
    await driver.findElement(By.css(".remove_modal_remove_btn")).click()
    // 13 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 14 | verifyElementPresent | css=.empty | 
    {
      const elements = await driver.findElements(By.css(".empty"))
      assert(elements.length)
    }
  })
})
