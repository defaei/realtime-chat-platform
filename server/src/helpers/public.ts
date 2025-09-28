export class CustomPublicHelpers {
  static isArraysEqual(firstArray: any[], secondArray: any[]): boolean {
    if (firstArray.length !== secondArray.length) return false;
    const sortedFirstArray = [...firstArray].sort();
    const sortedSecondArray = [...secondArray].sort();

    return sortedFirstArray.every(
      (value, index) => value === sortedSecondArray[index],
    );
  }

  static isArrayHasDuplicatedValue(array: any[]): boolean {
    const arraySet = new Set(array);
    return array.length === arraySet.size ? false : true;
  }
}
