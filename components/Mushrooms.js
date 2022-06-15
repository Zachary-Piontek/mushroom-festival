
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        // *** clear out the container element
        container.innerHTMl = '';
        // loop the mushrooms!
        // add one Mushroom component for each mushroom object
        //     - call the Mushroom component with the mushroom object
        //     - append the returned element to the container  
        for (const mushroom of mushrooms) {
            const image = Mushroom({ mushroom });
            container.append(image);
        }
    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}