export async function clickWhenVisible(element) {
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
}

export async function setValueAndVerify(input, value) {
    await input.waitForEnabled({ timeout: 5000 });
    await input.setValue(value);
    await expect(input).toHaveValue(value);
}
