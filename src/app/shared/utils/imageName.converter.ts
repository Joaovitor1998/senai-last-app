export function getImageFromVehicleName(vehicleName: string, imageFormat: string): string {

    const vehicleNameAsList: string[] = vehicleName.split(" ");

    const isCompoundName: boolean = vehicleNameAsList.length > 1;

    let imageName = vehicleNameAsList[0].toLowerCase();

    if (isCompoundName) {
        imageName += compoundNameFormatter(vehicleNameAsList);
    }

    imageName += `.${imageFormat}`;

    return imageName;
}

function compoundNameFormatter(vehicleNameAsList: string[]): string {

    let imageName = "";
    const listLength = vehicleNameAsList.length;

    for (let i = 1; i < listLength; i++) {

        const compoundName = vehicleNameAsList[i];

        // Get the length of the compound name. ('ranger'.length --> 4)
        const compoundNameLength = compoundName.length;

        // Convert the first letter into uppercase. ('r' --> 'R')
        const firstLetterToUpper = compoundName[0].toUpperCase();

        // Get the compound name substring. ('ranger' --> 'anger')
        const compoundNameSubstring = compoundName.substring(1, compoundNameLength);

        // Join to form the compound name. ('R' + 'anger' --> 'Ranger')
        const compoundNameFormatted = firstLetterToUpper + compoundNameSubstring;

        imageName += compoundNameFormatted;
    }

    return imageName;
}