# MMMPackageCollection

This is the registry for all SPM packages we use at [Media.Monks](https://media.monks.com).

We use the [Package Collection Generator](https://github.com/apple/swift-package-collection-generator/tree/main/Sources/PackageCollectionGenerator) as defined in the [documentation](https://www.swift.org/blog/package-collections/#rolling-your-own-collection). So adding a new package is as easy as adding it to `packages.json`, upon pushing to
[GitHub](), the Actions will take care of the rest.
