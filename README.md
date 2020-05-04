# DO101-apps

Apps for the DO101 course.
# Deploys the apps using the OC Command 
oc login https://api.ocp-na2.prod.nextcle.com:6443
oc new-project randifilan
oc new-app --name v1 https://github.com/randifilan/DO101-apps.git#update-app --context-dir version
oc get pods
oc logs -f pods/v1-1-lvsfw
oc get pods
oc get svc
oc expose svc/v1
oc get route
oc get pods
oc log -f pods/v1-1-lvsfw
oc logs -f pods/v1-1-lvsfw
oc log -f pods/v1-1-lvsfw
oc get pods
oc get svc
oc expose svc/v1
history 
oc expose svc/v1
oc get pods
oc get svc
oc get route
oc get pods
oc logs -f v1-2-build
oc get pods
oc logs -f v1-3-build
watch 'oc get pods'
