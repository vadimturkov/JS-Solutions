// Solution to CodeWars kata: Directions Reduction
// https://www.codewars.com/kata/directions-reduction

const oppositeDirections = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
};

const directionsReduction = plan => 
    plan.reduce((path, current) => {
        if(current === oppositeDirections[path.slice(-1)]) {
            path.pop();
        } else {
            path.push(current);
        }
        return path;
    }, []);