
/**
 * Converts a CSV string to JSON format.
 * @param csv - The CSV string to convert.
 * @returns An array of objects representing the CSV data in JSON format.
 */
const csvToJson = (csv: String) => {

    const rows:string[] = csv.split('\n');
    const headers:string[] = rows[0].split(',');

    const json:Object = rows.slice(1).map((row) => {
        const values = row.split(',');
        return headers.reduce((accumulator: any, header: string, i: number) => {
            // console.info(accumulator, header, values[i]);
            // Assign each value to its corresponding header
            accumulator[header] = values[i];
            return accumulator;
        }, {});
    });

    console.info("Converted csv to json: ", json);

    return json;
};

// const jsonToCsv = (json) => {}



export { csvToJson };