const railgun = {
  speed: 1000
}

const namedRailgun = { name: 'EST 101', ...railgun }

console.log(`I have a gun called ${namedRailgun.name}.`)
