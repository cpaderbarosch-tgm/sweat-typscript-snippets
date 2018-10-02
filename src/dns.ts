import dns from "dns"

process.argv.slice(2).map((hostname) => {
  if (typeof hostname === "string") {
    dns.lookup(hostname, (err, address) => {
      if (err) {
        console.error("Could not resolve hostname")
      }

      console.log(`Address of "${hostname}": ${address}`)
    })
  }
})
