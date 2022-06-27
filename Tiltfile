docker_build("kyjah/nodejs-server", "src", dockerfile="src/Dockerfile")
k8s_yaml(kustomize("examples/hello"))
k8s_resource('hello', port_forwards='8080:8080')