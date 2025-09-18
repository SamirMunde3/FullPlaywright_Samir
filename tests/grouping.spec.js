import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('this is beforeAll Hook......')
})
test.afterAll(async()=>{
    console.log('this is aftereAll Hook......')
})

test.beforeEach(async()=>{
    console.log('this is beforeEach Hook......')
})

test.afterEach(async()=>{
    console.log('this is afterEach Hook......')
})

test.describe('Smoke',()=>{

    test('Test1', async({page})=>{
        console.log('this is test 1....')
    })
    
    test('Test2', async({page})=>{
        console.log('this is test 2....')
    })
})


test.describe('Sanity', ()=>{

    test('Test3', async({page})=>{
        console.log('this is test 3....')
    })
    
    
    test('Test4', async({page})=>{
        console.log('this is test 4....')
    })
})
test.describe('Regression',()=>{

    test('Test5', async({page})=>{
        console.log('this is test 5....')
    })
    
    test('Test6', async({page})=>{
        console.log('this is test 6....')
    })
})