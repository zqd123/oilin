const fs = require('fs')
const path = require('path')

function readJsonFileSync(filePath) {
  try {
    const fileContent = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
    return JSON.parse(fileContent)
  } catch (err) {
    console.error('Error reading or parsing the JSON file:', err)
  }
}

const formateJson = (data) => {
  const result = []
  Object.keys(data).forEach((key) => {
    result.push({
      key,
      EnglishValue: data[key],
      ChinaValue: '',
    })
  })
  return result
}

async function saveFile(filePath, obj) {
  try {
    const jsonData = JSON.stringify(obj, null, 2) // 格式化输出
    await fs.promises.writeFile(path.resolve(__dirname, filePath), jsonData)
    console.log('File saved successfully.')
  } catch (err) {
    console.error('Error saving the file:', err)
  }
}

//  导出JSON文件
const data = readJsonFileSync('../src/locales/en.json')
saveFile('./output.json', formateJson(data))

function getExcelData(data) {
  console.log('🚀 ~ getExcelData ~ data:', typeof data)
  const result = {}
  data.forEach((item) => {
    result[item.key] = item.ChinaValue
  })
  return result
}

// 导入JSON
// const excelData = readJsonFileSync('./output.json')
// saveFile('./zh-CN.json', getExcelData(excelData))
