class GenerateDataHelper {
    async generateStylishNumber(num: number) {
        const asString = num.toString();

        console.log(asString.length);

        let line = '';

        for (let index = 0; index < asString.length; index++) {
            line += '-';
        }

        console.log('');
        console.log(`[-${line}-]`);
        console.log(`| ${num} |`);
        console.log(`[-${line}-]`);
        console.log('');
    }
}

export default new GenerateDataHelper();
