const networks = {
  testnet1: 'testnet1',
  testnet2: 'testnet2',
  testnet3: 'testnet3',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'testnet1.local') {
return networks.testnet1
} else if (hostname === 'testnet2.local') {
return networks.testnet2
} else {
return networks.testnet3
}
}

export {networks as default, hostnameToNetworkType}
