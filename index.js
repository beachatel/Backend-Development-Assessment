// backend file holding all the headers of csv
// "db.insert({x})"

function preload() {

    table = loadTable('Data/age_descending.csv', 'csv', 'header');

}


    // for loop to run through the rows / r = row
    for (let r = 0; r < table.getRowCount(); r++ ) {
        const name = table.getString(r, 'name');
        const doe = table.getString(r, 'date_of_event')

        // const age = table.getString(r, 'age')
      
        const citizenship = table.getString(r, 'citizenship')
        const eventLoc = table.getString(r, 'event_location')
        const eventLocDist = table.getString(r, 'event_location_district')
        const eventLocReg = table.getString(r, 'event_location_region')
        const dod = table.getString(r, 'date_of_death')
        const gender = table.getString(r, 'gender')
        const tookPart = table.getString(r, 'took_part_in_the_hostilities')
        const por = table.getString(r, 'place_of_residence')
        const porDist = table.getString(r, 'place_of_residence_district')
        const toi = table.getString(r, 'type_of_injury')
        const ammo = table.getString(r, 'ammunition')
        const killedBy = table.getString(r, 'killed_by')
        const notes = table.getString(r, 'notes')





    }
