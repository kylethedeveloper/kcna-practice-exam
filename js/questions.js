/* KCNA Mock Exam — Expanded Question Bank */
/* Total Questions: 258 */

const questions = [
  {
    "id": 1,
    "domain": "Kubernetes Fundamentals",
    "question": "You need to temporarily prevent new pods from being scheduled on a node for maintenance. Which command should you use?",
    "options": [
      "A) `kubectl taint nodes node1 maintenance=true:NoSchedule`",
      "B) `kubectl cordon node1`",
      "C) `kubectl drain node1`",
      "D) `kubectl delete node node1`"
    ],
    "correctAnswer": 1,
    "explanation": "`kubectl cordon` marks a node as unschedulable, preventing new pods from being scheduled while existing pods continue running. This is ideal for temporary maintenance. Option A (taint) is more complex and requires pod tolerations. Option C (drain) would evict existing pods. Option D would remove the node entirely."
  },
  {
    "id": 2,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the primary purpose of an init container in Kubernetes?",
    "options": [
      "A) To run alongside the main container throughout the pod's lifecycle",
      "B) To perform setup tasks that must complete before the main container starts",
      "C) To monitor the health of the main container",
      "D) To handle network traffic for the main container"
    ],
    "correctAnswer": 1,
    "explanation": "Init containers run to completion before the main application containers start. They're used for setup tasks like waiting for services, populating volumes, or running initialization scripts. They don't run alongside the main container (that's a sidecar)."
  },
  {
    "id": 3,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command creates a deployment named \"web-app\" with the nginx image?",
    "options": [
      "A) `kubectl run web-app --image=nginx`",
      "B) `kubectl create deployment web-app --image=nginx`",
      "C) `kubectl deploy web-app --image=nginx`",
      "D) `kubectl apply deployment web-app --image=nginx`"
    ],
    "correctAnswer": 1,
    "explanation": "`kubectl create deployment` creates a deployment resource. Option A creates a pod, not a deployment. Options C and D use non-existent commands."
  },
  {
    "id": 4,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the difference between `kubectl create` and `kubectl run`?",
    "options": [
      "A) `kubectl create` creates any resource type; `kubectl run` creates only pods",
      "B) `kubectl create` is deprecated; `kubectl run` is the new standard",
      "C) They are identical commands with different syntax",
      "D) `kubectl create` is for YAML files only; `kubectl run` is for command-line creation"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl create` is a general command for creating any Kubernetes resource from specifications. `kubectl run` was historically used for creating deployments but now primarily creates pods. Neither is deprecated."
  },
  {
    "id": 5,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Pod Security Standard provides the most restrictive security policies?",
    "options": [
      "A) Privileged",
      "B) Baseline",
      "C) Restricted",
      "D) Default"
    ],
    "correctAnswer": 2,
    "explanation": "The three Pod Security Standards are:\n\n- **Privileged**: Unrestricted (least secure)\n- **Baseline**: Minimal restrictions\n- **Restricted**: Most restrictive, follows pod hardening best practices"
  },
  {
    "id": 6,
    "domain": "Kubernetes Fundamentals",
    "question": "You have a database application that requires persistent storage and stable network identity. Which workload type should you use?",
    "options": [
      "A) Deployment",
      "B) StatefulSet",
      "C) DaemonSet",
      "D) Job"
    ],
    "correctAnswer": 1,
    "explanation": "Databases require:\n\n- Stable network identity (predictable pod names)\n- Persistent storage that follows the pod\n- Ordered deployment and scaling\n\nStatefulSets provide all of these. Deployments are for stateless applications."
  },
  {
    "id": 7,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens to existing pods on a node when you run `kubectl cordon node1`?",
    "options": [
      "A) All pods are immediately evicted",
      "B) Existing pods continue running; no new pods can be scheduled",
      "C) Pods are gracefully terminated",
      "D) The node is removed from the cluster"
    ],
    "correctAnswer": 1,
    "explanation": "`kubectl cordon` only affects scheduling of new pods. Existing pods remain running. To evict existing pods, you would use `kubectl drain`."
  },
  {
    "id": 8,
    "domain": "Kubernetes Fundamentals",
    "question": "Which command is used to view logs from a specific container in a pod?",
    "options": [
      "A) `kubectl describe pod <pod-name>`",
      "B) `kubectl get logs <pod-name>`",
      "C) `kubectl logs <pod-name>`",
      "D) `kubectl inspect <pod-name>`"
    ],
    "correctAnswer": 2,
    "explanation": "`kubectl logs` retrieves container logs. Add `-c <container-name>` for multi-container pods. `kubectl describe` shows events and metadata, not logs."
  },
  {
    "id": 9,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a namespace in Kubernetes?",
    "options": [
      "A) To provide network isolation between pods",
      "B) To organize and isolate resources within a cluster",
      "C) To define pod security policies",
      "D) To manage container images"
    ],
    "correctAnswer": 1,
    "explanation": "Namespaces provide a way to divide cluster resources between multiple users or projects. They provide scope for names and can have resource quotas. They don't provide network isolation by default (Network Policies do that)."
  },
  {
    "id": 10,
    "domain": "Kubernetes Fundamentals",
    "question": "Which component is responsible for scheduling pods to nodes in a Kubernetes cluster?",
    "options": [
      "A) kubelet",
      "B) kube-proxy",
      "C) kube-scheduler",
      "D) controller-manager"
    ],
    "correctAnswer": 2,
    "explanation": "The kube-scheduler watches for newly created pods and assigns them to nodes based on resource requirements, constraints, and policies. kubelet runs on nodes and ensures containers are running. kube-proxy handles network rules."
  },
  {
    "id": 11,
    "domain": "Kubernetes Fundamentals",
    "question": "What kubectl command can you use to modify a deployment's replica count?",
    "options": [
      "A) `kubectl edit deployment <name>`",
      "B) `kubectl patch deployment <name> -p '{\"spec\":{\"replicas\":5}}'`",
      "C) `kubectl scale deployment <name> --replicas=5`",
      "D) All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All three methods can modify a deployment's replica count:\n\n- `kubectl edit` opens the resource in an editor\n- `kubectl patch` applies partial changes\n- `kubectl scale` is specifically designed for scaling"
  },
  {
    "id": 12,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command creates a pod that runs only once and terminates?",
    "options": [
      "A) `kubectl create pod <name> --image=<image>`",
      "B) `kubectl run <name> --image=<image> --restart=Never`",
      "C) `kubectl apply -f pod.yaml --once`",
      "D) `kubectl execute <name> --image=<image>`"
    ],
    "correctAnswer": 1,
    "explanation": "The `--restart=Never` flag creates a pod that won't be restarted after completion, running only once. Default restart policy is \"Always\"."
  },
  {
    "id": 13,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the default restart policy for pods in Kubernetes?",
    "options": [
      "A) Never",
      "B) OnFailure",
      "C) Always",
      "D) RestartOnError"
    ],
    "correctAnswer": 2,
    "explanation": "The default restart policy for pods is \"Always\", meaning containers will be restarted regardless of exit status. Other options are \"OnFailure\" and \"Never\"."
  },
  {
    "id": 14,
    "domain": "Kubernetes Fundamentals",
    "question": "Which resource ensures that a specific number of pod replicas are running at all times?",
    "options": [
      "A) Pod",
      "B) ReplicaSet",
      "C) Service",
      "D) ConfigMap"
    ],
    "correctAnswer": 1,
    "explanation": "A ReplicaSet ensures that a specified number of pod replicas are running at any given time. Deployments manage ReplicaSets, and ReplicaSets manage pods."
  },
  {
    "id": 15,
    "domain": "Kubernetes Fundamentals",
    "question": "You need to update a deployment's container image. Which command should you use?",
    "options": [
      "A) `kubectl set image deployment/<name> <container>=<new-image>`",
      "B) `kubectl update deployment/<name> --image=<new-image>`",
      "C) `kubectl modify deployment/<name> image=<new-image>`",
      "D) `kubectl change deployment/<name> --image=<new-image>`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl set image` is the imperative command to update container images. Other commands listed don't exist in kubectl."
  },
  {
    "id": 16,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of labels in Kubernetes?",
    "options": [
      "A) To provide human-readable names for resources",
      "B) To organize and select groups of objects",
      "C) To define resource quotas",
      "D) To configure network policies"
    ],
    "correctAnswer": 1,
    "explanation": "Labels are key-value pairs attached to objects for organization and selection. Selectors use labels to identify groups of resources. They're essential for Services, Deployments, and other controllers."
  },
  {
    "id": 17,
    "domain": "Kubernetes Fundamentals",
    "question": "Which file format is primarily used for Kubernetes resource definitions?",
    "options": [
      "A) JSON only",
      "B) XML",
      "C) YAML or JSON",
      "D) TOML"
    ],
    "correctAnswer": 2,
    "explanation": "Kubernetes accepts both YAML and JSON for resource definitions. YAML is more commonly used because it's more human-readable and supports comments."
  },
  {
    "id": 18,
    "domain": "Kubernetes Fundamentals",
    "question": "What is a pod in Kubernetes?",
    "options": [
      "A) A single container",
      "B) The smallest deployable unit that can contain one or more containers",
      "C) A group of nodes",
      "D) A storage volume"
    ],
    "correctAnswer": 1,
    "explanation": "A pod is the smallest and simplest Kubernetes object. It can contain one or more tightly coupled containers that share storage and network resources."
  },
  {
    "id": 19,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command displays detailed information about a specific resource?",
    "options": [
      "A) `kubectl get <resource> <name> -o wide`",
      "B) `kubectl inspect <resource> <name>`",
      "C) `kubectl describe <resource> <name>`",
      "D) `kubectl info <resource> <name>`"
    ],
    "correctAnswer": 2,
    "explanation": "`kubectl describe` provides detailed information about a resource, including events, conditions, and relationships. `kubectl get -o wide` shows additional columns but less detail than describe."
  },
  {
    "id": 20,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a Service in Kubernetes?",
    "options": [
      "A) To provide persistent storage for pods",
      "B) To expose pods to network traffic",
      "C) To schedule pods on nodes",
      "D) To manage pod lifecycle"
    ],
    "correctAnswer": 1,
    "explanation": "A Service provides stable networking for pods. It creates a stable IP address and DNS name and load balances traffic across matching pods. Services abstract pod IP addresses which change when pods are recreated."
  },
  {
    "id": 21,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Pod Security Standard should be used for security-sensitive workloads that require maximum isolation?",
    "options": [
      "A) Privileged",
      "B) Baseline",
      "C) Restricted",
      "D) Enhanced"
    ],
    "correctAnswer": 2,
    "explanation": "The Restricted Pod Security Standard is the most secure, enforcing pod hardening best practices. It prevents privilege escalation, requires running as non-root, and restricts capabilities."
  },
  {
    "id": 22,
    "domain": "Kubernetes Fundamentals",
    "question": "What command removes a taint from a node?",
    "options": [
      "A) `kubectl taint nodes <node> key:NoSchedule-`",
      "B) `kubectl untaint nodes <node> key`",
      "C) `kubectl remove taint <node> key`",
      "D) `kubectl delete taint <node> key`"
    ],
    "correctAnswer": 0,
    "explanation": "The minus sign (-) at the end removes a taint. Format: `kubectl taint nodes <node> <key>:<effect>-`"
  },
  {
    "id": 23,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Kubernetes object stores non-sensitive configuration data as key-value pairs?",
    "options": [
      "A) Secret",
      "B) ConfigMap",
      "C) Volume",
      "D) PersistentVolume"
    ],
    "correctAnswer": 1,
    "explanation": "ConfigMaps store non-sensitive configuration data as key-value pairs or files. Secrets are for sensitive data. Both can be consumed as environment variables or mounted as files."
  },
  {
    "id": 24,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the primary role of kubelet?",
    "options": [
      "A) Schedule pods to nodes",
      "B) Manage the API server",
      "C) Ensure containers are running on a node",
      "D) Route network traffic"
    ],
    "correctAnswer": 2,
    "explanation": "kubelet is the node agent that ensures containers are running as specified in pod specifications. It communicates with the API server and manages container runtime."
  },
  {
    "id": 25,
    "domain": "Kubernetes Fundamentals",
    "question": "Which command displays all pods in all namespaces?",
    "options": [
      "A) `kubectl get pods`",
      "B) `kubectl get pods --all`",
      "C) `kubectl get pods --all-namespaces`",
      "D) `kubectl get pods -n *`"
    ],
    "correctAnswer": 2,
    "explanation": "The `--all-namespaces` flag (or `-A`) shows resources across all namespaces. Without it, kubectl only shows resources in the current namespace."
  },
  {
    "id": 26,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens when a pod's liveness probe fails?",
    "options": [
      "A) The pod is marked as unhealthy but continues running",
      "B) The container is restarted",
      "C) The pod is deleted",
      "D) Nothing, it's just a warning"
    ],
    "correctAnswer": 1,
    "explanation": "When a liveness probe fails repeatedly, Kubernetes restarts the container. Readiness probes stop traffic but don't restart. Startup probes protect slow-starting containers."
  },
  {
    "id": 27,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command can be used to execute a command inside a running container?",
    "options": [
      "A) `kubectl exec <pod-name> -- <command>`",
      "B) `kubectl run <pod-name> <command>`",
      "C) `kubectl execute <pod-name> <command>`",
      "D) `kubectl ssh <pod-name> <command>`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl exec` executes commands in a running container. The `--` separates kubectl arguments from the command to execute. Add `-it` for interactive terminal."
  },
  {
    "id": 28,
    "domain": "Container Orchestration",
    "question": "What is the purpose of a DaemonSet?",
    "options": [
      "A) To run a copy of a pod on all (or some) nodes in the cluster",
      "B) To ensure a specified number of pod replicas are running",
      "C) To run pods that perform batch jobs",
      "D) To manage stateful applications"
    ],
    "correctAnswer": 0,
    "explanation": "DaemonSets ensure that a pod runs on every node (or selected nodes using node selectors). Common use cases include log collectors, monitoring agents, and storage daemons."
  },
  {
    "id": 29,
    "domain": "Container Orchestration",
    "question": "Which Container Runtime Interface (CRI) compliant runtime can be used with Kubernetes?",
    "options": [
      "A) containerd",
      "B) CRI-O",
      "C) Docker Engine (via dockershim)",
      "D) Both A and B"
    ],
    "correctAnswer": 3,
    "explanation": "Both containerd and CRI-O implement the Container Runtime Interface and can be used with Kubernetes. Docker Engine requires dockershim (deprecated) or containerd."
  },
  {
    "id": 30,
    "domain": "Container Orchestration",
    "question": "What type of storage is best suited for a StatefulSet running a database?",
    "options": [
      "A) emptyDir",
      "B) PersistentVolume with ReadWriteOnce access mode",
      "C) hostPath",
      "D) ConfigMap"
    ],
    "correctAnswer": 1,
    "explanation": "StatefulSets require persistent storage that survives pod rescheduling. PersistentVolumes with ReadWriteOnce provide dedicated storage per pod. emptyDir is ephemeral and deleted when pods are removed."
  },
  {
    "id": 31,
    "domain": "Container Orchestration",
    "question": "What is the primary difference between a Deployment and a StatefulSet?",
    "options": [
      "A) Deployments are for stateless apps; StatefulSets provide stable network identity and persistent storage",
      "B) StatefulSets cannot be scaled",
      "C) Deployments require more resources",
      "D) StatefulSets do not support rolling updates"
    ],
    "correctAnswer": 0,
    "explanation": "Key differences:\n\n- Deployments: stateless, interchangeable pods, shared storage\n- StatefulSets: stateful, unique pod identities (pod-0, pod-1), dedicated persistent volumes, ordered operations"
  },
  {
    "id": 32,
    "domain": "Container Orchestration",
    "question": "Which network policy type controls incoming traffic to pods?",
    "options": [
      "A) Egress",
      "B) Ingress",
      "C) Both A and B",
      "D) Route"
    ],
    "correctAnswer": 1,
    "explanation": "Network Policies have two types:\n\n- **Ingress**: Controls incoming traffic TO pods\n- **Egress**: Controls outgoing traffic FROM pods\n\nA policy can define both."
  },
  {
    "id": 33,
    "domain": "Container Orchestration",
    "question": "What is the purpose of a sidecar container?",
    "options": [
      "A) To replace the main container when it fails",
      "B) To extend or enhance the functionality of the main container",
      "C) To schedule the main container",
      "D) To monitor node health"
    ],
    "correctAnswer": 1,
    "explanation": "Sidecar containers run alongside the main container in the same pod, sharing network and storage. Common uses: logging, monitoring, proxies, service mesh. They enhance without replacing the main container."
  },
  {
    "id": 34,
    "domain": "Container Orchestration",
    "question": "Which volume type is suitable for sharing files between containers in the same pod?",
    "options": [
      "A) PersistentVolume",
      "B) hostPath",
      "C) emptyDir",
      "D) nfs"
    ],
    "correctAnswer": 2,
    "explanation": "emptyDir is a temporary volume that exists as long as the pod runs. It's shared between all containers in the pod. When the pod is removed, the emptyDir is deleted. Perfect for scratch space or sharing files between containers."
  },
  {
    "id": 35,
    "domain": "Container Orchestration",
    "question": "What does HPA (Horizontal Pod Autoscaler) scale based on?",
    "options": [
      "A) Node capacity only",
      "B) CPU utilization, memory, or custom metrics",
      "C) Network traffic only",
      "D) Storage usage"
    ],
    "correctAnswer": 1,
    "explanation": "HPA can scale based on:\n\n- CPU utilization\n- Memory utilization\n- Custom metrics (from applications or external systems)\n- Multiple metrics simultaneously"
  },
  {
    "id": 36,
    "domain": "Container Orchestration",
    "question": "Can HPA be used with a DaemonSet?",
    "options": [
      "A) Yes, it's recommended",
      "B) No, because DaemonSets run one pod per node by design",
      "C) Yes, but only for CPU metrics",
      "D) No, DaemonSets don't support scaling"
    ],
    "correctAnswer": 1,
    "explanation": "DaemonSets maintain one pod per node (or selected nodes). Horizontal scaling doesn't make sense for DaemonSets since you can't have multiple pods of the same DaemonSet on one node."
  },
  {
    "id": 37,
    "domain": "Container Orchestration",
    "question": "What scheduler task is NOT a primary responsibility of the Kubernetes scheduler?",
    "options": [
      "A) Selecting which node a pod should run on",
      "B) Monitoring pod health",
      "C) Considering resource requirements when placing pods",
      "D) Respecting node taints and pod tolerations"
    ],
    "correctAnswer": 1,
    "explanation": "The scheduler assigns pods to nodes. It doesn't monitor pod health (kubelet does that via probes). Scheduler responsibilities:\n\n- Select nodes for pods\n- Consider resource requirements\n- Respect taints, tolerations, and affinity rules"
  },
  {
    "id": 38,
    "domain": "Container Orchestration",
    "question": "Which resource is used to store sensitive information like passwords?",
    "options": [
      "A) ConfigMap",
      "B) Secret",
      "C) Volume",
      "D) Environment variables only"
    ],
    "correctAnswer": 1,
    "explanation": "Secrets are designed to store sensitive information like passwords, OAuth tokens, and SSH keys. While not encrypted by default, they're more secure than ConfigMaps and can be encrypted at rest with proper configuration."
  },
  {
    "id": 39,
    "domain": "Container Orchestration",
    "question": "How are Secrets stored in Kubernetes by default?",
    "options": [
      "A) Encrypted at rest automatically",
      "B) Base64 encoded (not encrypted)",
      "C) Plain text",
      "D) Hashed with SHA-256"
    ],
    "correctAnswer": 1,
    "explanation": "By default, Secrets are only base64 encoded, NOT encrypted. Base64 is encoding, not encryption\u2014anyone with access to etcd can decode them. Enable encryption at rest in API server configuration for true security."
  },
  {
    "id": 40,
    "domain": "Container Orchestration",
    "question": "You want to ensure that a specific pod only runs on nodes with GPU hardware. What should you use?",
    "options": [
      "A) Pod affinity",
      "B) Node selector or node affinity",
      "C) DaemonSet",
      "D) Taints only"
    ],
    "correctAnswer": 1,
    "explanation": "To target specific hardware:\n\n- **Node selectors**: Simple label matching (e.g., `gpu=true`)\n- **Node affinity**: More expressive rules\n- **Taints/tolerations**: Also work but are typically for repelling pods"
  },
  {
    "id": 41,
    "domain": "Container Orchestration",
    "question": "What is the correct taint effect to prevent new pods from scheduling but allow existing pods to continue running?",
    "options": [
      "A) NoExecute",
      "B) NoSchedule",
      "C) PreferNoSchedule",
      "D) PreventSchedule"
    ],
    "correctAnswer": 1,
    "explanation": "Taint effects:\n\n- **NoSchedule**: Prevents new pods from scheduling (existing pods stay)\n- **PreferNoSchedule**: Soft version, tries to avoid scheduling\n- **NoExecute**: Evicts existing pods and prevents new ones"
  },
  {
    "id": 42,
    "domain": "Container Orchestration",
    "question": "Which of the following can trigger a pod eviction?",
    "options": [
      "A) Node running out of resources",
      "B) Taint with NoExecute effect",
      "C) kubectl drain command",
      "D) All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Pods can be evicted by:\n\n- Node resource pressure (out of memory, disk)\n- Taints with NoExecute effect\n- `kubectl drain` command\n- API-initiated eviction"
  },
  {
    "id": 43,
    "domain": "Container Orchestration",
    "question": "What is the primary purpose of a Service Account in Kubernetes?",
    "options": [
      "A) To allow users to access the cluster",
      "B) To provide an identity for pods to interact with the Kubernetes API",
      "C) To manage node authentication",
      "D) To store user passwords"
    ],
    "correctAnswer": 1,
    "explanation": "Service Accounts provide an identity for processes running in pods. They allow pods to authenticate with the API server and access cluster resources. Each namespace has a default service account."
  },
  {
    "id": 44,
    "domain": "Container Orchestration",
    "question": "Which workload type is best for running a web application that sends requests to other microservices?",
    "options": [
      "A) StatefulSet",
      "B) DaemonSet",
      "C) Deployment",
      "D) Job"
    ],
    "correctAnswer": 2,
    "explanation": "Web applications that proxy or send traffic are stateless. They don't need persistent storage or stable identity. Deployments are perfect for stateless applications that can be scaled horizontally."
  },
  {
    "id": 45,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the primary purpose of ArgoCD?",
    "options": [
      "A) Container image building",
      "B) GitOps continuous delivery for Kubernetes",
      "C) Log aggregation",
      "D) Network routing"
    ],
    "correctAnswer": 1,
    "explanation": "ArgoCD is a declarative GitOps continuous delivery tool. It monitors Git repositories and automatically synchronizes the desired state to Kubernetes clusters. Perfect for multi-cluster deployments and automated delivery."
  },
  {
    "id": 46,
    "domain": "Cloud Native Application Delivery",
    "question": "When should you use Helm?",
    "options": [
      "A) To package and deploy Kubernetes applications using templates",
      "B) To monitor cluster performance",
      "C) To manage container images",
      "D) To configure network policies"
    ],
    "correctAnswer": 0,
    "explanation": "Helm is a package manager for Kubernetes. It uses templates (charts) to define, install, and upgrade Kubernetes applications. Charts can be versioned, shared, and customized with values files."
  },
  {
    "id": 47,
    "domain": "Cloud Native Application Delivery",
    "question": "What is a Helm chart?",
    "options": [
      "A) A performance monitoring tool",
      "B) A package of Kubernetes resources",
      "C) A network topology diagram",
      "D) A container image registry"
    ],
    "correctAnswer": 1,
    "explanation": "A Helm chart is a collection of files that describe related Kubernetes resources. It includes templates, default values, and metadata. Charts can be shared via repositories."
  },
  {
    "id": 48,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the main advantage of GitOps?",
    "options": [
      "A) Faster container startup times",
      "B) Using Git as the single source of truth for infrastructure and applications",
      "C) Reduced storage costs",
      "D) Improved network performance"
    ],
    "correctAnswer": 1,
    "explanation": "GitOps core principles:\n\n- Git is the source of truth\n- Declarative configuration\n- Automated synchronization\n- Version control for infrastructure\n- Audit trail via Git history"
  },
  {
    "id": 49,
    "domain": "Cloud Native Application Delivery",
    "question": "Which deployment strategy involves running two identical production environments (old and new)?",
    "options": [
      "A) Rolling update",
      "B) Canary deployment",
      "C) Blue-green deployment",
      "D) Recreate"
    ],
    "correctAnswer": 2,
    "explanation": "Blue-green deployment maintains two identical environments:\n\n- Blue: Current production\n- Green: New version\n\nTraffic switches completely from blue to green once validated. Enables instant rollback."
  },
  {
    "id": 50,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the purpose of an Ingress controller?",
    "options": [
      "A) To manage container lifecycle",
      "B) To provide HTTP/HTTPS routing to services",
      "C) To schedule pods on nodes",
      "D) To store application secrets"
    ],
    "correctAnswer": 1,
    "explanation": "Ingress controllers implement Ingress resources, providing:\n\n- HTTP/HTTPS routing\n- Load balancing\n- SSL/TLS termination\n- Name-based virtual hosting"
  },
  {
    "id": 51,
    "domain": "Cloud Native Application Delivery",
    "question": "What advantage does Gateway API have over traditional Ingress?",
    "options": [
      "A) Faster performance",
      "B) Lower resource usage",
      "C) Role-oriented design, multi-protocol support, and better extensibility",
      "D) Simpler configuration"
    ],
    "correctAnswer": 2,
    "explanation": "Gateway API advantages over Ingress:\n\n- Role-oriented: Separate resources for different roles\n- Multi-protocol: HTTP, HTTPS, TCP, UDP, gRPC\n- Extensible: Standardized extension points\n- Cross-namespace routing\n- Better traffic management (canary, A/B testing)"
  },
  {
    "id": 52,
    "domain": "Cloud Native Application Delivery",
    "question": "Which tool would you use to deploy applications to multiple Kubernetes clusters from a Git repository?",
    "options": [
      "A) Helm",
      "B) ArgoCD",
      "C) kubectl",
      "D) Docker"
    ],
    "correctAnswer": 1,
    "explanation": "ArgoCD excels at multi-cluster management with Git as the source of truth. It can deploy to multiple clusters from a single Git repository, monitor sync status, and auto-heal configuration drift."
  },
  {
    "id": 53,
    "domain": "Cloud Native Application Delivery",
    "question": "What is a key benefit of using declarative configuration for Kubernetes resources?",
    "options": [
      "A) Faster execution",
      "B) Desired state can be version controlled and automatically reconciled",
      "C) Requires less storage",
      "D) Works without an API server"
    ],
    "correctAnswer": 1,
    "explanation": "Declarative configuration (YAML/JSON) describes the desired state. Kubernetes controllers automatically reconcile actual state to match desired state. Benefits: version control, repeatability, auditability."
  },
  {
    "id": 54,
    "domain": "Cloud Native Architecture",
    "question": "Which CNCF project is used for collecting metrics and monitoring Kubernetes clusters?",
    "options": [
      "A) Fluentd",
      "B) Prometheus",
      "C) Envoy",
      "D) CoreDNS"
    ],
    "correctAnswer": 1,
    "explanation": "Prometheus is the CNCF standard for metrics collection and monitoring. It collects time-series data, provides a powerful query language (PromQL), and integrates with Grafana for visualization."
  },
  {
    "id": 55,
    "domain": "Cloud Native Architecture",
    "question": "What is the purpose of distributed tracing?",
    "options": [
      "A) To track requests as they flow through microservices",
      "B) To monitor disk usage",
      "C) To manage network routing",
      "D) To schedule container workloads"
    ],
    "correctAnswer": 0,
    "explanation": "Distributed tracing tracks requests across multiple services, showing:\n\n- Request path through services\n- Latency at each hop\n- Errors and bottlenecks\n- Service dependencies\n\nTools: Jaeger, Zipkin"
  },
  {
    "id": 56,
    "domain": "Cloud Native Architecture",
    "question": "What are \"spans\" in the context of distributed tracing?",
    "options": [
      "A) Network segments",
      "B) Individual units of work in a distributed system",
      "C) Storage volumes",
      "D) Pod replicas"
    ],
    "correctAnswer": 1,
    "explanation": "In distributed tracing:\n\n- **Trace**: Complete journey of a request\n- **Span**: Individual operation within a trace (e.g., database query, HTTP call)\n\nSpans have start time, duration, and metadata."
  },
  {
    "id": 57,
    "domain": "Cloud Native Architecture",
    "question": "Which of the following is a core principle of cloud-native architecture?",
    "options": [
      "A) Monolithic application design",
      "B) Manual scaling and deployment",
      "C) Microservices, containers, and dynamic orchestration",
      "D) Single point of failure for simplicity"
    ],
    "correctAnswer": 2,
    "explanation": "Cloud-native principles:\n\n- Microservices architecture\n- Containerization\n- Dynamic orchestration (Kubernetes)\n- Automation and CI/CD\n- Resilience and observability\n- DevOps culture"
  },
  {
    "id": 58,
    "domain": "Cloud Native Architecture",
    "question": "What is the role of the CNCF (Cloud Native Computing Foundation)?",
    "options": [
      "A) To sell cloud computing services",
      "B) To provide a vendor-neutral home for open-source cloud-native projects",
      "C) To compete with Kubernetes",
      "D) To develop proprietary cloud solutions"
    ],
    "correctAnswer": 1,
    "explanation": "CNCF (Cloud Native Computing Foundation) hosts and nurtures cloud-native open-source projects like Kubernetes, Prometheus, Envoy, and many others. It's vendor-neutral and part of the Linux Foundation."
  },
  {
    "id": 59,
    "domain": "Cloud Native Architecture",
    "question": "Which image pull policy instructs Kubernetes to always pull the container image from the registry?",
    "options": [
      "A) IfNotPresent",
      "B) Never",
      "C) Always",
      "D) OnUpdate"
    ],
    "correctAnswer": 2,
    "explanation": "Image pull policies:\n\n- **Always**: Pull image every time (latest tags)\n- **IfNotPresent**: Pull only if not cached locally (default for specific tags)\n- **Never**: Never pull, must exist locally"
  },
  {
    "id": 60,
    "domain": "Cloud Native Architecture",
    "question": "You have an application that requires a database with persistent storage and consistent network identity. Which statement is correct?",
    "options": [
      "A) Use a Deployment because it's more flexible",
      "B) Use a StatefulSet because databases need stable identity and persistent volumes",
      "C) Use a DaemonSet to ensure the database runs on every node",
      "D) Use a Job because databases complete their work and exit"
    ],
    "correctAnswer": 1,
    "explanation": "Databases require:\n\n- Persistent storage (data survives restarts)\n- Stable network identity (for replication, clustering)\n- Ordered scaling (primary before replicas)\n\nStatefulSets provide all of these guarantees."
  },
  {
    "id": 61,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the primary difference between `kubectl cordon` and `kubectl taint`?",
    "options": [
      "A) Cordon is for permanent node removal; taint is temporary",
      "B) Cordon marks node unschedulable; taint provides granular control with tolerations",
      "C) Cordon evicts pods; taint prevents scheduling",
      "D) They are identical in functionality"
    ],
    "correctAnswer": 1,
    "explanation": "Key differences:\n\n- **kubectl cordon**: Simple, marks node unschedulable, no additional configuration needed\n- **kubectl taint**: More flexible, requires pod tolerations, allows dedicated nodes for specific workloads"
  },
  {
    "id": 62,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command would you use to create a pod imperatively?",
    "options": [
      "A) `kubectl apply -f pod.yaml`",
      "B) `kubectl create pod mypod --image=nginx`",
      "C) `kubectl run mypod --image=nginx`",
      "D) `kubectl generate pod mypod --image=nginx`"
    ],
    "correctAnswer": 2,
    "explanation": "`kubectl run` is the imperative command to create pods. `kubectl apply -f` is declarative (uses YAML file). `kubectl create pod` is not a valid command format."
  },
  {
    "id": 63,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a readiness probe?",
    "options": [
      "A) To restart unhealthy containers",
      "B) To determine when a container is ready to accept traffic",
      "C) To check if a container needs more resources",
      "D) To monitor container logs"
    ],
    "correctAnswer": 1,
    "explanation": "Readiness probes tell Kubernetes when a container is ready to serve requests. Failed readiness probes remove the pod from service endpoints but don't restart the container. Liveness probes restart containers."
  },
  {
    "id": 64,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Kubernetes object automatically manages the lifecycle of pods in a deployment?",
    "options": [
      "A) Service",
      "B) ReplicaSet",
      "C) ConfigMap",
      "D) Namespace"
    ],
    "correctAnswer": 1,
    "explanation": "Deployments create and manage ReplicaSets, which in turn manage pods. The ReplicaSet ensures the desired number of pod replicas are running. Deployments handle rolling updates by creating new ReplicaSets."
  },
  {
    "id": 65,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the default namespace in Kubernetes?",
    "options": [
      "A) kube-system",
      "B) kube-public",
      "C) default",
      "D) production"
    ],
    "correctAnswer": 2,
    "explanation": "The default namespace is where resources are created if no namespace is specified. Other system namespaces: kube-system (system components), kube-public (publicly readable), kube-node-lease (node heartbeats)."
  },
  {
    "id": 66,
    "domain": "Kubernetes Fundamentals",
    "question": "You want to deploy a stateless web application that can be easily scaled. Which workload type should you use?",
    "options": [
      "A) StatefulSet",
      "B) DaemonSet",
      "C) Deployment",
      "D) Job"
    ],
    "correctAnswer": 2,
    "explanation": "Stateless web applications are perfect for Deployments:\n\n- No persistent data requirements\n- Pods are interchangeable\n- Easy horizontal scaling\n- Rolling updates"
  },
  {
    "id": 67,
    "domain": "Kubernetes Fundamentals",
    "question": "Which command shows the current context of your kubectl configuration?",
    "options": [
      "A) `kubectl config view`",
      "B) `kubectl config current-context`",
      "C) `kubectl context`",
      "D) `kubectl get context`"
    ],
    "correctAnswer": 1,
    "explanation": "`kubectl config current-context` shows the active context. `kubectl config view` shows the entire config file. Contexts define cluster, user, and namespace combinations."
  },
  {
    "id": 68,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens when you delete a pod that is managed by a deployment?",
    "options": [
      "A) The pod is permanently removed",
      "B) The ReplicaSet creates a new pod to maintain the desired count",
      "C) The deployment is automatically deleted",
      "D) All containers in the pod are archived"
    ],
    "correctAnswer": 1,
    "explanation": "When a pod managed by a Deployment is deleted, the ReplicaSet controller immediately creates a replacement pod to maintain the desired replica count. This ensures high availability."
  },
  {
    "id": 69,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command can you use to label a pod?",
    "options": [
      "A) `kubectl label pod <name> key=value`",
      "B) `kubectl tag pod <name> key=value`",
      "C) `kubectl annotate pod <name> key=value`",
      "D) `kubectl set label pod <name> key=value`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl label` adds or modifies labels. Add `--overwrite` to change existing labels. Remove labels with `key-` (minus sign). Annotations use `kubectl annotate` and are for non-identifying metadata."
  },
  {
    "id": 70,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of an annotation in Kubernetes?",
    "options": [
      "A) To select groups of objects",
      "B) To attach non-identifying metadata to objects",
      "C) To enforce security policies",
      "D) To define resource requests"
    ],
    "correctAnswer": 1,
    "explanation": "Annotations store arbitrary metadata that doesn't identify objects (unlike labels). Common uses:\n\n- Build information\n- Tool configuration\n- Contact information\n\nAnnotations can't be used in selectors."
  },
  {
    "id": 71,
    "domain": "Kubernetes Fundamentals",
    "question": "Which component stores the cluster state in Kubernetes?",
    "options": [
      "A) API Server",
      "B) etcd",
      "C) Controller Manager",
      "D) kubelet"
    ],
    "correctAnswer": 1,
    "explanation": "etcd is a distributed key-value store that holds the entire cluster state. The API server reads from and writes to etcd. All Kubernetes data is stored in etcd (pods, services, secrets, etc.)."
  },
  {
    "id": 72,
    "domain": "Kubernetes Fundamentals",
    "question": "What kubectl command scales a deployment to 5 replicas?",
    "options": [
      "A) `kubectl scale deployment myapp --replicas=5`",
      "B) `kubectl set replicas deployment myapp 5`",
      "C) `kubectl update deployment myapp --replicas=5`",
      "D) `kubectl modify deployment myapp replicas=5`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl scale` is the imperative command for scaling. It updates the replica count in the deployment spec. You can also edit the deployment YAML directly."
  },
  {
    "id": 73,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command can display resource usage (CPU/memory) for pods?",
    "options": [
      "A) `kubectl top pods`",
      "B) `kubectl stats pods`",
      "C) `kubectl usage pods`",
      "D) `kubectl resources pods`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl top` shows current resource usage (requires metrics-server). `kubectl top pods` shows CPU/memory per pod. `kubectl top nodes` shows node-level usage."
  },
  {
    "id": 74,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a toleration in Kubernetes?",
    "options": [
      "A) To prevent pods from being scheduled",
      "B) To allow pods to be scheduled on nodes with matching taints",
      "C) To increase pod priority",
      "D) To define resource limits"
    ],
    "correctAnswer": 1,
    "explanation": "Tolerations allow pods to be scheduled on tainted nodes. A pod must have a toleration matching a node's taint to be scheduled there. Example:\n\n```yaml\n\ntolerations:\n\n- key: \"gpu\"\n\n  operator: \"Equal\"\n  value: \"true\"\n  effect: \"NoSchedule\"\n\n```"
  },
  {
    "id": 75,
    "domain": "Kubernetes Fundamentals",
    "question": "Which file is kubectl configuration typically stored in?",
    "options": [
      "A) `~/.kube/config`",
      "B) `/etc/kubernetes/config`",
      "C) `~/kubectl.conf`",
      "D) `/var/lib/kubelet/config`"
    ],
    "correctAnswer": 0,
    "explanation": "The default kubectl config file is `~/.kube/config`. It contains contexts, clusters, and user credentials. You can specify different config files with `--kubeconfig` or `KUBECONFIG` environment variable."
  },
  {
    "id": 76,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens when a startup probe fails?",
    "options": [
      "A) The container is marked unhealthy but continues running",
      "B) The container is killed and restarted according to restart policy",
      "C) The pod is deleted immediately",
      "D) Nothing, it's just logged"
    ],
    "correctAnswer": 1,
    "explanation": "Startup probes protect slow-starting containers. If startup probe fails after all retries, the container is killed and restarted. Liveness and readiness probes are disabled until startup succeeds."
  },
  {
    "id": 77,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command displays events for the cluster?",
    "options": [
      "A) `kubectl get events`",
      "B) `kubectl logs events`",
      "C) `kubectl describe events`",
      "D) `kubectl show events`"
    ],
    "correctAnswer": 0,
    "explanation": "`kubectl get events` lists cluster events. Add `--watch` to stream events. Events show pod scheduling, image pulls, errors, and warnings. Events are namespace-scoped."
  },
  {
    "id": 78,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a PersistentVolumeClaim (PVC)?",
    "options": [
      "A) To create a new storage volume on a node",
      "B) To request storage resources from a PersistentVolume",
      "C) To delete unused volumes",
      "D) To configure network storage"
    ],
    "correctAnswer": 1,
    "explanation": "PersistentVolumeClaims (PVCs) request storage. Workflow:\n\n1. Admin creates PersistentVolume (PV)\n2. User creates PVC requesting size and access mode\n3. Kubernetes binds PVC to suitable PV\n4. Pod references PVC"
  },
  {
    "id": 79,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command can create resources from a YAML file?",
    "options": [
      "A) `kubectl create -f file.yaml`",
      "B) `kubectl apply -f file.yaml`",
      "C) Both A and B",
      "D) `kubectl generate -f file.yaml`"
    ],
    "correctAnswer": 2,
    "explanation": "Both commands work:\n\n- `kubectl create -f`: Creates resources, fails if they exist\n- `kubectl apply -f`: Creates or updates resources declaratively (recommended for GitOps)"
  },
  {
    "id": 80,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the primary function of kube-proxy?",
    "options": [
      "A) To schedule pods",
      "B) To manage network rules for pod communication",
      "C) To store cluster configuration",
      "D) To run containers"
    ],
    "correctAnswer": 1,
    "explanation": "kube-proxy runs on each node and manages network rules (iptables/IPVS). It enables:\n\n- Service IP to pod IP mapping\n- Load balancing across pods\n- ClusterIP implementation"
  },
  {
    "id": 81,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Pod Security Standard allows unrestricted access and privileges?",
    "options": [
      "A) Baseline",
      "B) Restricted",
      "C) Privileged",
      "D) Permissive"
    ],
    "correctAnswer": 2,
    "explanation": "The Privileged Pod Security Standard is unrestricted, allowing:\n\n- Running as root\n- All capabilities\n- Host access\n\nOnly use for trusted system workloads."
  },
  {
    "id": 82,
    "domain": "Kubernetes Fundamentals",
    "question": "What command would you use to drain a node for maintenance, ignoring DaemonSet pods?",
    "options": [
      "A) `kubectl drain <node> --force`",
      "B) `kubectl drain <node> --ignore-daemonsets`",
      "C) `kubectl evict <node> --all`",
      "D) `kubectl cordon <node> --evict`"
    ],
    "correctAnswer": 1,
    "explanation": "`kubectl drain` evicts pods and cordons the node. `--ignore-daemonsets` is required because DaemonSet pods can't be drained (they run on every node). Use `--force` for pods not managed by controllers."
  },
  {
    "id": 83,
    "domain": "Kubernetes Fundamentals",
    "question": "Which resource type ensures that a job runs to completion?",
    "options": [
      "A) Deployment",
      "B) ReplicaSet",
      "C) Job",
      "D) CronJob"
    ],
    "correctAnswer": 2,
    "explanation": "Jobs create pods that run to completion. They ensure tasks finish successfully:\n\n- Batch processing\n- Data processing\n- Backups\n\nJobs track successful completions and retry failures."
  },
  {
    "id": 84,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the difference between a Job and a CronJob?",
    "options": [
      "A) Jobs run continuously; CronJobs run once",
      "B) Jobs run once; CronJobs run on a schedule",
      "C) Jobs are for batch processing; CronJobs are for web services",
      "D) There is no difference"
    ],
    "correctAnswer": 1,
    "explanation": "- **Job**: Runs once, ensures completion\n- **CronJob**: Creates Jobs on a schedule (cron format)\n\nCronJobs are for recurring tasks like backups, reports, cleanup."
  },
  {
    "id": 85,
    "domain": "Kubernetes Fundamentals",
    "question": "Which kubectl command exports a resource definition in YAML format?",
    "options": [
      "A) `kubectl get <resource> <name> -o yaml`",
      "B) `kubectl export <resource> <name> --format=yaml`",
      "C) `kubectl describe <resource> <name> --yaml`",
      "D) `kubectl show <resource> <name> -o yaml`"
    ],
    "correctAnswer": 0,
    "explanation": "`-o yaml` outputs in YAML format. Other formats: `-o json`, `-o wide`, `-o name`. Useful for backing up resources or creating templates."
  },
  {
    "id": 86,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the purpose of a service selector?",
    "options": [
      "A) To choose which namespace a service operates in",
      "B) To identify which pods the service routes traffic to",
      "C) To select which nodes can run the service",
      "D) To configure service type"
    ],
    "correctAnswer": 1,
    "explanation": "Services use selectors to identify target pods. Example:\n\n```yaml\n\nselector:\n  app: web\n  tier: frontend\n\n```\n\nService routes traffic to pods with matching labels."
  },
  {
    "id": 87,
    "domain": "Kubernetes Fundamentals",
    "question": "Which controller ensures that the desired number of nodes are running in the cluster?",
    "options": [
      "A) ReplicaSet",
      "B) Deployment",
      "C) Node Controller",
      "D) Scheduler"
    ],
    "correctAnswer": 2,
    "explanation": "The Node Controller is part of the controller-manager. It:\n\n- Monitors node health\n- Manages node lifecycle\n- Evicts pods from unhealthy nodes\n- Updates node status"
  },
  {
    "id": 88,
    "domain": "Container Orchestration",
    "question": "When should you use a StatefulSet instead of a Deployment?",
    "options": [
      "A) When you need more replicas",
      "B) When you need stable network identifiers and persistent storage",
      "C) When you want faster deployments",
      "D) When you don't need rolling updates"
    ],
    "correctAnswer": 1,
    "explanation": "Use StatefulSet when applications require:\n\n- Stable, unique network identities (pod-0, pod-1, etc.)\n- Persistent storage per pod\n- Ordered deployment and scaling\n- Ordered updates and deletions\n\nExamples: databases, message queues, clustered applications."
  },
  {
    "id": 89,
    "domain": "Container Orchestration",
    "question": "What is the correct order of pod termination in a StatefulSet with 3 replicas (pod-0, pod-1, pod-2)?",
    "options": [
      "A) pod-0, pod-1, pod-2",
      "B) pod-2, pod-1, pod-0",
      "C) Random order",
      "D) All terminate simultaneously"
    ],
    "correctAnswer": 1,
    "explanation": "StatefulSets terminate pods in reverse order of their ordinals:\n\n- Creation: pod-0 \u2192 pod-1 \u2192 pod-2\n- Deletion: pod-2 \u2192 pod-1 \u2192 pod-0\n\nThis ensures ordered shutdown for stateful applications."
  },
  {
    "id": 90,
    "domain": "Container Orchestration",
    "question": "Which volume type persists data beyond the pod's lifecycle?",
    "options": [
      "A) emptyDir",
      "B) PersistentVolume",
      "C) configMap",
      "D) secret"
    ],
    "correctAnswer": 1,
    "explanation": "PersistentVolumes provide durable storage that persists beyond pod lifecycle. emptyDir is deleted when the pod is removed. PVs enable:\n\n- Data persistence across pod restarts\n- Data migration when pods move nodes\n- Independent storage lifecycle"
  },
  {
    "id": 91,
    "domain": "Container Orchestration",
    "question": "What is a sidecar container pattern used for?",
    "options": [
      "A) Replacing the main container",
      "B) Enhancing the main container with additional functionality (logging, monitoring, etc.)",
      "C) Scheduling the main container",
      "D) Storing backup data"
    ],
    "correctAnswer": 1,
    "explanation": "Sidecar pattern uses:\n\n- Log aggregators (collecting logs to central system)\n- Service mesh proxies (Envoy, Linkerd)\n- Configuration reloaders\n- Monitoring agents\n\nSidecars run alongside and enhance the main container."
  },
  {
    "id": 92,
    "domain": "Container Orchestration",
    "question": "Which network policy direction controls traffic leaving pods?",
    "options": [
      "A) Ingress",
      "B) Egress",
      "C) Outbound",
      "D) External"
    ],
    "correctAnswer": 1,
    "explanation": "Network Policy directions:\n\n- **Ingress**: Controls incoming traffic TO pods\n- **Egress**: Controls outgoing traffic FROM pods\n\nExample: Restrict database pods to only accept traffic from app pods (ingress), and only connect to specific external APIs (egress)."
  },
  {
    "id": 93,
    "domain": "Container Orchestration",
    "question": "What is the purpose of a hostPath volume?",
    "options": [
      "A) To mount a file or directory from the host node into a pod",
      "B) To create network storage",
      "C) To share data between pods",
      "D) To store secrets"
    ],
    "correctAnswer": 0,
    "explanation": "hostPath volumes mount a file or directory from the node's filesystem. Use cases:\n\n- Access node-level data\n- Run privileged containers\n- Testing\n\n\u26a0\ufe0f Security risk: Pods can access host filesystem. Avoid in multi-tenant clusters."
  },
  {
    "id": 94,
    "domain": "Container Orchestration",
    "question": "Which container runtime is NOT CRI-compliant?",
    "options": [
      "A) containerd",
      "B) CRI-O",
      "C) rkt (unmaintained)",
      "D) Docker Engine (without dockershim)"
    ],
    "correctAnswer": 3,
    "explanation": "CRI-compliant runtimes:\n\n- \u2705 containerd (most common)\n- \u2705 CRI-O\n- \u274c Docker Engine requires dockershim (deprecated in K8s 1.20, removed in 1.24)\n\ncontainerd is now the standard runtime."
  },
  {
    "id": 95,
    "domain": "Container Orchestration",
    "question": "What metrics can HPA use for autoscaling?",
    "options": [
      "A) CPU and memory only",
      "B) CPU, memory, and custom metrics",
      "C) Network traffic only",
      "D) Disk I/O only"
    ],
    "correctAnswer": 1,
    "explanation": "HPA supports multiple metric sources:\n\n- Resource metrics: CPU, memory (from metrics-server)\n- Custom metrics: Application-specific (via custom metrics API)\n- External metrics: Cloud provider metrics\n\nCan combine multiple metrics with different target values."
  },
  {
    "id": 96,
    "domain": "Container Orchestration",
    "question": "Which resource type is best for running a monitoring agent on every node?",
    "options": [
      "A) Deployment",
      "B) StatefulSet",
      "C) DaemonSet",
      "D) ReplicaSet"
    ],
    "correctAnswer": 2,
    "explanation": "DaemonSets run one pod per node, perfect for:\n\n- Node monitoring agents (Prometheus Node Exporter)\n- Log collectors (Fluentd, Filebeat)\n- Storage daemons (Ceph, Gluster)\n- Network plugins (Calico, Weave)"
  },
  {
    "id": 97,
    "domain": "Container Orchestration",
    "question": "What is the primary task of the Kubernetes scheduler?",
    "options": [
      "A) To monitor pod health",
      "B) To assign pods to nodes based on resource requirements and constraints",
      "C) To manage container lifecycle",
      "D) To handle network routing"
    ],
    "correctAnswer": 1,
    "explanation": "Scheduler responsibilities:\n\n- Filter nodes that meet pod requirements\n- Score nodes based on optimization rules\n- Select best node for the pod\n- Consider: resources, taints/tolerations, affinity, topology\n\nDoes NOT monitor health\u2014that's kubelet's job."
  },
  {
    "id": 98,
    "domain": "Container Orchestration",
    "question": "How should you encrypt Secrets at rest in Kubernetes?",
    "options": [
      "A) Secrets are automatically encrypted",
      "B) Enable encryption in the API server configuration",
      "C) Use base64 encoding",
      "D) Store them in ConfigMaps instead"
    ],
    "correctAnswer": 1,
    "explanation": "Secrets are base64 encoded by default (NOT encrypted). To encrypt:\n\n1. Create encryption configuration\n2. Configure API server with `--encryption-provider-config`\n3. Restart API server\n4. Encrypt existing secrets with `kubectl get secrets --all-namespaces -o json | kubectl replace -f -`"
  },
  {
    "id": 99,
    "domain": "Container Orchestration",
    "question": "What is the default encoding method for Kubernetes Secrets?",
    "options": [
      "A) AES-256 encryption",
      "B) Base64 encoding (not encrypted)",
      "C) SHA-256 hashing",
      "D) Plain text"
    ],
    "correctAnswer": 1,
    "explanation": "Important distinction:\n\n- **Encoding (base64)**: Transforms data, easily reversible, NOT security\n- **Encryption**: Uses keys, secure, hard to reverse\n\nDefault Secrets are only base64 encoded. Anyone with etcd access can decode them."
  },
  {
    "id": 100,
    "domain": "Container Orchestration",
    "question": "Which taint effect will evict existing pods and prevent new ones from being scheduled?",
    "options": [
      "A) NoSchedule",
      "B) PreferNoSchedule",
      "C) NoExecute",
      "D) EvictAll"
    ],
    "correctAnswer": 2,
    "explanation": "Taint effects:\n\n- **NoSchedule**: Prevents new pods, existing pods stay\n- **PreferNoSchedule**: Soft preference to avoid node\n- **NoExecute**: Evicts existing pods without tolerations AND prevents new pods\n\nNoExecute is the strongest effect."
  },
  {
    "id": 101,
    "domain": "Container Orchestration",
    "question": "You want to dedicate a node to GPU workloads. What should you do?",
    "options": [
      "A) Use a DaemonSet",
      "B) Apply a taint to the node and add tolerations to GPU pods",
      "C) Use a StatefulSet",
      "D) Label the pods only"
    ],
    "correctAnswer": 1,
    "explanation": "Dedicated node pattern:\n\n```bash\n\n# Taint node\nkubectl taint nodes gpu-node gpu=true:NoSchedule\n\n# GPU pods need toleration\ntolerations:\n\n- key: \"gpu\"\n\n  operator: \"Equal\"\n  value: \"true\"\n  effect: \"NoSchedule\"\n\n```\n\nAlso add nodeSelector for additional targeting."
  },
  {
    "id": 102,
    "domain": "Container Orchestration",
    "question": "What happens if a pod doesn't have a toleration for a node's taint?",
    "options": [
      "A) The pod runs anyway",
      "B) The pod is scheduled but runs slowly",
      "C) The pod cannot be scheduled on that node",
      "D) The taint is removed"
    ],
    "correctAnswer": 2,
    "explanation": "Taints repel pods. Without matching tolerations, the scheduler skips tainted nodes. This is how you dedicate nodes to specific workloads or prevent certain pods from running."
  },
  {
    "id": 103,
    "domain": "Container Orchestration",
    "question": "Which workload type maintains the order of pod creation and deletion?",
    "options": [
      "A) Deployment",
      "B) StatefulSet",
      "C) DaemonSet",
      "D) ReplicaSet"
    ],
    "correctAnswer": 1,
    "explanation": "StatefulSets guarantee ordering:\n\n- **Creation**: Sequential (pod-0 first, then pod-1, etc.)\n- **Deletion**: Reverse sequential (pod-N first, down to pod-0)\n- **Updates**: Ordered rolling updates\n\nDeployments create/delete pods in any order."
  },
  {
    "id": 104,
    "domain": "Container Orchestration",
    "question": "What is the difference between ConfigMap and Secret?",
    "options": [
      "A) ConfigMap is for non-sensitive data; Secret is for sensitive data",
      "B) ConfigMap is encrypted; Secret is not",
      "C) They are identical",
      "D) ConfigMap is only for environment variables"
    ],
    "correctAnswer": 0,
    "explanation": "- **ConfigMap**: Configuration, environment variables, config files\n- **Secret**: Passwords, tokens, SSH keys, TLS certificates\n\nBoth can be consumed as:\n\n- Environment variables\n- Command-line arguments\n- Files in volumes"
  },
  {
    "id": 105,
    "domain": "Cloud Native Application Delivery",
    "question": "When would you choose ArgoCD over Helm?",
    "options": [
      "A) For simple one-time deployments",
      "B) For GitOps-based continuous delivery across multiple clusters",
      "C) For building container images",
      "D) For monitoring applications"
    ],
    "correctAnswer": 1,
    "explanation": "Choose ArgoCD when you need:\n\n- GitOps workflow (Git as source of truth)\n- Multi-cluster deployment\n- Automatic synchronization\n- Drift detection and auto-healing\n- Declarative setup\n\nChoose Helm for package management and templating."
  },
  {
    "id": 106,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the main purpose of Helm?",
    "options": [
      "A) To monitor Kubernetes clusters",
      "B) To package and manage Kubernetes applications",
      "C) To build container images",
      "D) To manage network policies"
    ],
    "correctAnswer": 1,
    "explanation": "Helm is a package manager that:\n\n- Packages apps as charts\n- Manages dependencies\n- Supports versioning and rollback\n- Provides templating for customization\n- Enables sharing via repositories"
  },
  {
    "id": 107,
    "domain": "Cloud Native Application Delivery",
    "question": "What is stored in a Helm values file?",
    "options": [
      "A) Container images",
      "B) Configuration parameters that can be customized",
      "C) Network policies",
      "D) User authentication tokens"
    ],
    "correctAnswer": 1,
    "explanation": "values.YAML contains:\n\n- Default configuration values\n- Parameters that can be overridden during installation\n- Environment-specific settings\n\nInstall with custom values: `helm install myapp mychart -f custom-values.YAML`"
  },
  {
    "id": 108,
    "domain": "Cloud Native Application Delivery",
    "question": "What deployment strategy gradually shifts traffic from old to new versions?",
    "options": [
      "A) Blue-green deployment",
      "B) Canary deployment",
      "C) Rolling update",
      "D) Recreate"
    ],
    "correctAnswer": 1,
    "explanation": "Deployment strategies:\n\n- **Rolling update**: Gradual replacement (default)\n- **Blue-green**: Complete switch between environments\n- **Canary**: Gradual traffic shift (e.g., 10% \u2192 50% \u2192 100%)\n- **Recreate**: Delete all, then create new\n\nCanary reduces risk by exposing changes to small percentage first."
  },
  {
    "id": 109,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the primary benefit of using GitOps?",
    "options": [
      "A) Faster container startup",
      "B) Declarative, version-controlled infrastructure and automatic synchronization",
      "C) Lower costs",
      "D) Simpler networking"
    ],
    "correctAnswer": 1,
    "explanation": "GitOps benefits:\n\n- Git as single source of truth\n- Version control for infrastructure\n- Audit trail (who changed what, when)\n- Easy rollback (git revert)\n- Automated deployments\n- Drift detection"
  },
  {
    "id": 110,
    "domain": "Cloud Native Application Delivery",
    "question": "Which Gateway API resource defines the actual gateway that handles traffic?",
    "options": [
      "A) GatewayClass",
      "B) Gateway",
      "C) HTTPRoute",
      "D) Service"
    ],
    "correctAnswer": 1,
    "explanation": "Gateway API resources:\n\n- **GatewayClass**: Defines class of gateways (like IngressClass)\n- **Gateway**: Actual gateway instance that listens for traffic\n- **HTTPRoute/TCPRoute**: Routing rules\n\nGateway is the infrastructure, Routes are the traffic rules."
  },
  {
    "id": 111,
    "domain": "Cloud Native Application Delivery",
    "question": "What is an advantage of Gateway API over Ingress?",
    "options": [
      "A) It only works with HTTP",
      "B) It supports multiple protocols (HTTP, TCP, UDP, gRPC) and has role-oriented design",
      "C) It requires less configuration",
      "D) It uses less memory"
    ],
    "correctAnswer": 1,
    "explanation": "Gateway API advantages:\n\n- Multi-protocol: Not just HTTP/HTTPS\n- Role-oriented: Infrastructure vs. application teams\n- Expressive: Built-in advanced features\n- Portable: Less vendor lock-in\n- Extensible: Standardized extension mechanism"
  },
  {
    "id": 112,
    "domain": "Cloud Native Application Delivery",
    "question": "What is the role of an Ingress controller?",
    "options": [
      "A) To schedule pods",
      "B) To implement the rules defined in Ingress resources",
      "C) To manage secrets",
      "D) To monitor applications"
    ],
    "correctAnswer": 1,
    "explanation": "Ingress controllers:\n\n- Watch for Ingress resources\n- Configure underlying load balancer (nginx, HAProxy, Traefik)\n- Handle HTTP/HTTPS routing\n- Manage TLS termination\n\nPopular controllers: nginx, Traefik, HAProxy, Istio."
  },
  {
    "id": 113,
    "domain": "Cloud Native Application Delivery",
    "question": "Which practice is central to GitOps?",
    "options": [
      "A) Manual deployments",
      "B) Git repository as the source of truth for desired state",
      "C) Direct kubectl commands",
      "D) Binary configuration files"
    ],
    "correctAnswer": 1,
    "explanation": "GitOps core practices:\n\n- Infrastructure/applications described declaratively in Git\n- Automated agents sync Git state to clusters\n- No manual kubectl commands\n- Changes via pull requests\n- Continuous reconciliation"
  },
  {
    "id": 114,
    "domain": "Cloud Native Architecture",
    "question": "Which tool is used for distributed tracing in cloud-native applications?",
    "options": [
      "A) Prometheus",
      "B) Jaeger",
      "C) Fluentd",
      "D) CoreDNS"
    ],
    "correctAnswer": 1,
    "explanation": "Distributed tracing tools:\n\n- **Jaeger**: CNCF distributed tracing platform\n- **Zipkin**: Twitter's tracing system\n- **OpenTelemetry**: Vendor-neutral observability framework\n\nPrometheus is for metrics, not traces."
  },
  {
    "id": 115,
    "domain": "Cloud Native Architecture",
    "question": "What does Prometheus primarily collect?",
    "options": [
      "A) Application logs",
      "B) Metrics (time-series data)",
      "C) Distributed traces",
      "D) Container images"
    ],
    "correctAnswer": 1,
    "explanation": "Prometheus collects:\n\n- Metrics: Time-series data (counters, gauges, histograms)\n- Examples: CPU usage, request rate, error rate, response time\n\nNot for:\n\n- Logs (use Fluentd, Loki)\n- Traces (use Jaeger, Zipkin)"
  },
  {
    "id": 116,
    "domain": "Cloud Native Architecture",
    "question": "What is a \"trace\" in distributed tracing?",
    "options": [
      "A) A single log entry",
      "B) The complete journey of a request through multiple services",
      "C) A network packet",
      "D) A container event"
    ],
    "correctAnswer": 1,
    "explanation": "Tracing terminology:\n\n- **Trace**: End-to-end request flow across all services\n- **Span**: Single operation within the trace\n- **Tag**: Metadata attached to spans\n\nExample: Web request \u2192 API \u2192 Database (one trace, three spans)."
  },
  {
    "id": 117,
    "domain": "Cloud Native Architecture",
    "question": "Which image pull policy pulls the image only if it doesn't exist locally?",
    "options": [
      "A) Always",
      "B) Never",
      "C) IfNotPresent",
      "D) OnDemand"
    ],
    "correctAnswer": 2,
    "explanation": "Image pull policies:\n\n- **IfNotPresent**: Pull only if not in local cache (default for tagged images)\n- **Always**: Always pull latest (default for :latest tag)\n- **Never**: Only use local images\n\nIfNotPresent is most common for specific version tags."
  },
  {
    "id": 118,
    "domain": "Cloud Native Architecture",
    "question": "What is the CNCF's mission?",
    "options": [
      "A) To sell cloud services",
      "B) To provide a vendor-neutral home for open-source cloud-native projects",
      "C) To replace Kubernetes",
      "D) To compete with major cloud providers"
    ],
    "correctAnswer": 1,
    "explanation": "CNCF mission:\n\n- Host and nurture cloud-native open-source projects\n- Vendor-neutral governance\n- Foster community and collaboration\n- Provide certification programs (KCNA, CKA, etc.)\n\nPart of the Linux Foundation."
  },
  {
    "id": 119,
    "domain": "Cloud Native Architecture",
    "question": "Which cloud-native principle emphasizes designing for failure?",
    "options": [
      "A) Monolithic architecture",
      "B) Manual intervention",
      "C) Resilience and fault tolerance",
      "D) Single point of failure"
    ],
    "correctAnswer": 2,
    "explanation": "Cloud-native resilience principles:\n\n- Design for failure (expect components to fail)\n- Circuit breakers\n- Retry and timeout strategies\n- Graceful degradation\n- Health checks and auto-healing\n\nAvoid single points of failure."
  },
  {
    "id": 120,
    "domain": "Cloud Native Architecture",
    "question": "You need to deploy a message queue (like Kafka) that requires stable network identity for cluster formation. Which workload type should you use?",
    "options": [
      "A) Deployment",
      "B) DaemonSet",
      "C) StatefulSet",
      "D) Job"
    ],
    "correctAnswer": 2,
    "explanation": "Message queues like Kafka require:\n\n- Stable network identity for cluster formation\n- Persistent storage for message retention\n- Ordered deployment for proper initialization\n- Consistent pod names for addressing\n\nStatefulSet provides all requirements. Kafka brokers need to discover each other reliably."
  },
  {
    "id": 121,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the smallest deployable compute unit that you can create and manage in Kubernetes?",
    "options": [
      "A) Container",
      "B) Node",
      "C) Pod",
      "D) Deployment"
    ],
    "correctAnswer": 2,
    "explanation": "A Pod is the smallest execution unit in Kubernetes. While it encapsulates containers, Kubernetes manages Pods rather than individual containers directly."
  },
  {
    "id": 122,
    "domain": "Kubernetes Fundamentals",
    "question": "How does a Kubernetes Service know which Pods to route traffic to?",
    "options": [
      "A) By using IP addresses defined in the Service manifest",
      "B) By looking up the Node's hostname",
      "C) By using Labels and Selectors",
      "D) By directly referencing the Pod names"
    ],
    "correctAnswer": 2,
    "explanation": "Services use Label Selectors to identify the set of Pods they should route traffic to. Any Pod with labels matching the Service's selector will receive traffic."
  },
  {
    "id": 123,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following is an example of an imperative Kubernetes command?",
    "options": [
      "A) kubectl apply -f pod.yaml",
      "B) kubectl run nginx --image=nginx",
      "C) kubectl diff -f deployment.yaml",
      "D) kubectl kustomize ./dir"
    ],
    "correctAnswer": 1,
    "explanation": "Imperative commands tell Kubernetes exactly what action to take, such as 'run' or 'create'. Declarative commands like 'apply' provide a desired state configuration, and Kubernetes determines how to reach it."
  },
  {
    "id": 124,
    "domain": "Kubernetes Fundamentals",
    "question": "In the Kubernetes object model, which field is used to declare the desired state of the object?",
    "options": [
      "A) metadata",
      "B) status",
      "C) kind",
      "D) spec"
    ],
    "correctAnswer": 3,
    "explanation": "The 'spec' field in a Kubernetes object describes the desired state you want the cluster to maintain. The 'status' field describes the actual current state of the object."
  },
  {
    "id": 125,
    "domain": "Kubernetes Fundamentals",
    "question": "What tool is primarily used by administrators to communicate with the Kubernetes API?",
    "options": [
      "A) kube-proxy",
      "B) kubectl",
      "C) kubelet",
      "D) kube-dns"
    ],
    "correctAnswer": 1,
    "explanation": "kubectl is the command-line tool used to run commands against Kubernetes clusters. It communicates with the cluster's API server to manage applications and cluster resources."
  },
  {
    "id": 126,
    "domain": "Kubernetes Fundamentals",
    "question": "Which statement about Pods is true?",
    "options": [
      "A) Pods are permanently tied to the node they are scheduled on",
      "B) Pods can span across multiple nodes",
      "C) All containers in a Pod share the same network namespace and IP",
      "D) A single container cannot run without a ReplicaSet"
    ],
    "correctAnswer": 2,
    "explanation": "Containers within a single Pod share the same network namespace, including the IP address and network ports. They can communicate with each other using localhost."
  },
  {
    "id": 127,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following describes the 'status' field in a Kubernetes object?",
    "options": [
      "A) It is updated by the user to reflect desired changes",
      "B) It defines the container image to be used",
      "C) It is continuously updated by the Kubernetes system to reflect the current state",
      "D) It contains labels and annotations"
    ],
    "correctAnswer": 2,
    "explanation": "The status field is managed by the Kubernetes control plane. Various controllers observe the cluster and update the status to reflect the actual state of the system."
  },
  {
    "id": 128,
    "domain": "Kubernetes Fundamentals",
    "question": "Which type of Service exposes an application externally using a cloud provider's load balancer?",
    "options": [
      "A) ClusterIP",
      "B) NodePort",
      "C) ExternalName",
      "D) LoadBalancer"
    ],
    "correctAnswer": 3,
    "explanation": "The LoadBalancer Service type automatically provisions an external load balancer from the underlying cloud provider to route traffic to the application."
  },
  {
    "id": 129,
    "domain": "Kubernetes Fundamentals",
    "question": "What does the 'apiVersion' field specify in a Kubernetes YAML manifest?",
    "options": [
      "A) The version of the application being deployed",
      "B) The version of the Kubernetes API to use for creating the object",
      "C) The version of the container runtime",
      "D) The version of kubectl being used"
    ],
    "correctAnswer": 1,
    "explanation": "apiVersion tells Kubernetes which version of the API (e.g., apps/v1, v1) it should use to interpret the resource definition."
  },
  {
    "id": 130,
    "domain": "Kubernetes Fundamentals",
    "question": "How do you apply a declarative configuration file to a Kubernetes cluster?",
    "options": [
      "A) kubectl create < filename",
      "B) kubectl run -f filename",
      "C) kubectl apply -f filename",
      "D) kubectl set config filename"
    ],
    "correctAnswer": 2,
    "explanation": "The 'kubectl apply' command is used to apply declarative configurations. It creates or updates resources based on the provided YAML or JSON files."
  },
  {
    "id": 131,
    "domain": "Kubernetes Fundamentals",
    "question": "Which is true about declarative management compared to imperative management?",
    "options": [
      "A) Declarative management specifies the end state, imperative specifies the exact steps to get there",
      "B) Declarative management uses 'kubectl create', imperative uses 'kubectl apply'",
      "C) Declarative management is not supported in production",
      "D) Imperative management is the recommended approach for CI/CD pipelines"
    ],
    "correctAnswer": 0,
    "explanation": "Declarative management allows you to state what you want the system to look like, and Kubernetes handles the transition. Imperative management requires you to specify the exact sequence of commands to execute."
  },
  {
    "id": 132,
    "domain": "Kubernetes Fundamentals",
    "question": "If you want a short-lived task to run to completion, which workload resource should you use?",
    "options": [
      "A) Deployment",
      "B) Job",
      "C) DaemonSet",
      "D) Service"
    ],
    "correctAnswer": 1,
    "explanation": "A Job creates one or more Pods and ensures that a specified number of them successfully terminate. It is designed for batch processing and short-lived tasks."
  },
  {
    "id": 133,
    "domain": "Kubernetes Fundamentals",
    "question": "What defines a standard format for declaring Kubernetes objects?",
    "options": [
      "A) XML",
      "B) CSV",
      "C) YAML",
      "D) TOML"
    ],
    "correctAnswer": 2,
    "explanation": "YAML (and JSON) is the standard language used to define Kubernetes manifests, outlining the desired state of resources like Pods, Services, and Deployments."
  },
  {
    "id": 134,
    "domain": "Kubernetes Fundamentals",
    "question": "Which component in the Kubernetes architecture exposes the Kubernetes API?",
    "options": [
      "A) kube-scheduler",
      "B) kube-apiserver",
      "C) etcd",
      "D) kube-proxy"
    ],
    "correctAnswer": 1,
    "explanation": "The kube-apiserver is the front end for the Kubernetes control plane. It exposes the Kubernetes API and handles all REST requests."
  },
  {
    "id": 135,
    "domain": "Kubernetes Fundamentals",
    "question": "Which component runs on every worker node and is responsible for making sure containers are running in a Pod?",
    "options": [
      "A) kube-apiserver",
      "B) kubelet",
      "C) kube-proxy",
      "D) cloud-controller-manager"
    ],
    "correctAnswer": 1,
    "explanation": "The kubelet is an agent that runs on each node in the cluster. It ensures that containers are running and healthy as described in the PodSpecs."
  },
  {
    "id": 136,
    "domain": "Kubernetes Fundamentals",
    "question": "What connects a Role (or ClusterRole) to a user, group, or ServiceAccount?",
    "options": [
      "A) RoleBinding",
      "B) Policy",
      "C) Identity",
      "D) AuthorizationRule"
    ],
    "correctAnswer": 0,
    "explanation": "A RoleBinding grants the permissions defined in a Role to a user or set of users. It holds a list of subjects (users, groups, or ServiceAccounts) and a reference to the Role being granted."
  },
  {
    "id": 137,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Kubernetes component manages core control loops, such as the node controller and replicaset controller?",
    "options": [
      "A) kube-apiserver",
      "B) kube-scheduler",
      "C) kube-controller-manager",
      "D) kube-proxy"
    ],
    "correctAnswer": 2,
    "explanation": "The kube-controller-manager runs controller processes. These are background threads that handle routine tasks in the cluster, like responding when nodes go down or maintaining correct replica counts."
  },
  {
    "id": 138,
    "domain": "Kubernetes Fundamentals",
    "question": "How do you safely back up a Kubernetes cluster's state?",
    "options": [
      "A) By backing up the node filesystems",
      "B) By backing up the etcd database",
      "C) By exporting all pods using kubectl get pods -o yaml",
      "D) By copying the kube-apiserver logs"
    ],
    "correctAnswer": 1,
    "explanation": "Since etcd holds all cluster data, state, and secrets, backing up the etcd data directory or taking an etcd snapshot is the correct way to back up a Kubernetes cluster."
  },
  {
    "id": 139,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the recommended approach for upgrading a Kubernetes cluster?",
    "options": [
      "A) Upgrade worker nodes first, then the control plane",
      "B) Upgrade the control plane components first, then worker nodes",
      "C) Delete the cluster and recreate it with the new version",
      "D) Upgrade all nodes simultaneously using a script"
    ],
    "correctAnswer": 1,
    "explanation": "The best practice is to upgrade the control plane (kube-apiserver, controller-manager, scheduler) first. Worker nodes (kubelet, kube-proxy) should be upgraded afterwards to ensure compatibility."
  },
  {
    "id": 140,
    "domain": "Kubernetes Fundamentals",
    "question": "When upgrading a cluster with kubeadm, which command is used to plan the upgrade for the control plane?",
    "options": [
      "A) kubeadm upgrade plan",
      "B) kubeadm cluster update",
      "C) kubectl upgrade cluster",
      "D) kubeadm control-plane upgrade"
    ],
    "correctAnswer": 0,
    "explanation": "The 'kubeadm upgrade plan' command checks if you can upgrade the cluster, fetches the available versions, and shows you a summary of the components that will be upgraded."
  },
  {
    "id": 141,
    "domain": "Kubernetes Fundamentals",
    "question": "What object is used to limit total resource consumption (like CPU and Memory) across an entire namespace?",
    "options": [
      "A) LimitRange",
      "B) ResourceQuota",
      "C) NetworkPolicy",
      "D) PodSecurityPolicy"
    ],
    "correctAnswer": 1,
    "explanation": "A ResourceQuota provides constraints that limit aggregate resource consumption per namespace. It can limit the quantity of objects created or the total amount of compute resources."
  },
  {
    "id": 142,
    "domain": "Kubernetes Fundamentals",
    "question": "If you want to ensure that every new Pod in a namespace has default CPU and Memory limits, what object should you use?",
    "options": [
      "A) LimitRange",
      "B) ResourceQuota",
      "C) PriorityClass",
      "D) Deployment"
    ],
    "correctAnswer": 0,
    "explanation": "A LimitRange policy can automatically inject default resource requests and limits into Pods in a namespace that do not specify them."
  },
  {
    "id": 143,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following makes a Kubernetes cluster highly available (HA)?",
    "options": [
      "A) Having a single master node and multiple worker nodes",
      "B) Using a managed database for applications",
      "C) Deploying multiple control plane nodes and an external etcd cluster",
      "D) Running all workloads as DaemonSets"
    ],
    "correctAnswer": 2,
    "explanation": "High Availability in Kubernetes is typically achieved by running multiple control plane nodes (API servers, schedulers, controllers) and an HA etcd cluster to avoid a single point of failure."
  },
  {
    "id": 144,
    "domain": "Kubernetes Fundamentals",
    "question": "What component is responsible for linking a Kubernetes cluster to a cloud provider's API for managing load balancers and volumes?",
    "options": [
      "A) cloud-controller-manager",
      "B) kube-apiserver",
      "C) kube-proxy",
      "D) csi-driver"
    ],
    "correctAnswer": 0,
    "explanation": "The cloud-controller-manager embeds cloud-specific control logic. It lets you link your cluster into your cloud provider's API, decoupling cloud-specific code from core Kubernetes code."
  },
  {
    "id": 145,
    "domain": "Kubernetes Fundamentals",
    "question": "If a node is cordoned, what happens to the Pods currently running on it?",
    "options": [
      "A) They are immediately terminated",
      "B) They are moved to other nodes",
      "C) They continue running normally",
      "D) They are paused until the node is uncordoned"
    ],
    "correctAnswer": 2,
    "explanation": "Cordoning a node only affects new scheduling decisions. Pods that are already running on the cordoned node continue to run normally."
  },
  {
    "id": 146,
    "domain": "Kubernetes Fundamentals",
    "question": "Which port is standardly used by the kube-apiserver for secure communication?",
    "options": [
      "A) 8080",
      "B) 6443",
      "C) 2379",
      "D) 10250"
    ],
    "correctAnswer": 1,
    "explanation": "Port 6443 is the default port used by the kube-apiserver to expose the Kubernetes API securely over HTTPS."
  },
  {
    "id": 147,
    "domain": "Kubernetes Fundamentals",
    "question": "Who is responsible for interacting with the container runtime on a worker node to start and stop containers?",
    "options": [
      "A) kube-proxy",
      "B) kubelet",
      "C) container-manager",
      "D) kube-scheduler"
    ],
    "correctAnswer": 1,
    "explanation": "The kubelet interacts directly with the container runtime (like containerd or CRI-O) via the Container Runtime Interface (CRI) to pull images and start/stop containers."
  },
  {
    "id": 148,
    "domain": "Kubernetes Fundamentals",
    "question": "What is the first step the kube-scheduler takes when deciding where to place a Pod?",
    "options": [
      "A) Scoring",
      "B) Filtering (Predicates)",
      "C) Binding",
      "D) Preemption"
    ],
    "correctAnswer": 1,
    "explanation": "The scheduler first filters out nodes that do not meet the Pod's requirements (e.g., lack of CPU, incompatible taints). This phase is also known as applying predicates."
  },
  {
    "id": 149,
    "domain": "Kubernetes Fundamentals",
    "question": "What mechanism is used to repel Pods from specific Nodes unless the Pod explicitly permits it?",
    "options": [
      "A) Node Affinity",
      "B) Taints and Tolerations",
      "C) Node Selectors",
      "D) Pod Anti-Affinity"
    ],
    "correctAnswer": 1,
    "explanation": "Taints are applied to nodes to repel pods. Pods will not be scheduled on a tainted node unless they possess a corresponding Toleration."
  },
  {
    "id": 150,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following is a 'soft' Node Affinity rule?",
    "options": [
      "A) requiredDuringSchedulingIgnoredDuringExecution",
      "B) preferredDuringSchedulingIgnoredDuringExecution",
      "C) requiredDuringSchedulingRequiredDuringExecution",
      "D) preferredDuringExecutionIgnoredDuringScheduling"
    ],
    "correctAnswer": 1,
    "explanation": "'preferredDuringSchedulingIgnoredDuringExecution' indicates a preference. The scheduler will try to enforce it, but if it cannot, the pod will still be scheduled."
  },
  {
    "id": 151,
    "domain": "Kubernetes Fundamentals",
    "question": "How do you manually schedule a Pod to a specific Node without using the scheduler?",
    "options": [
      "A) By setting the nodeSelector to the node's IP",
      "B) By assigning the nodeName field in the Pod spec",
      "C) By using a specific Label on the Pod",
      "D) You cannot bypass the scheduler"
    ],
    "correctAnswer": 1,
    "explanation": "Setting the 'nodeName' field in the Pod spec bypasses the scheduler completely, and the Pod will be immediately bound to the specified node."
  },
  {
    "id": 152,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens if a Pod's resource requests exceed the capacity of all available nodes in the cluster?",
    "options": [
      "A) The Pod is scheduled but throttled",
      "B) The Pod goes into a Pending state",
      "C) The Pod goes into a CrashLoopBackOff state",
      "D) The cluster scales up automatically (without a cluster autoscaler)"
    ],
    "correctAnswer": 1,
    "explanation": "If no node has enough resources to satisfy the Pod's requests, the scheduler cannot find a fit, and the Pod remains in a Pending state."
  },
  {
    "id": 153,
    "domain": "Kubernetes Fundamentals",
    "question": "If a container sets memory 'requests' but no 'limits', what Quality of Service (QoS) class is assigned to the Pod?",
    "options": [
      "A) Guaranteed",
      "B) Burstable",
      "C) BestEffort",
      "D) Critical"
    ],
    "correctAnswer": 1,
    "explanation": "A Pod is assigned the 'Burstable' QoS class if at least one container has a memory or CPU request, but the requests do not equal the limits (or limits are not set)."
  },
  {
    "id": 154,
    "domain": "Kubernetes Fundamentals",
    "question": "Which Pods are the first to be evicted when a Node experiences resource pressure?",
    "options": [
      "A) Guaranteed Pods",
      "B) Burstable Pods",
      "C) BestEffort Pods",
      "D) Pods with Node Affinity"
    ],
    "correctAnswer": 2,
    "explanation": "BestEffort pods (which have no resource requests or limits set) are the lowest priority and are the first to be evicted when a node runs out of compute resources."
  },
  {
    "id": 155,
    "domain": "Kubernetes Fundamentals",
    "question": "What feature allows you to ensure that a set of Pods is evenly distributed across different availability zones?",
    "options": [
      "A) Taints and Tolerations",
      "B) Pod Topology Spread Constraints",
      "C) Resource Quotas",
      "D) Node Affinity"
    ],
    "correctAnswer": 1,
    "explanation": "Pod Topology Spread Constraints allow you to control how Pods are distributed across your cluster among failure-domains such as regions, zones, or nodes."
  },
  {
    "id": 156,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens during preemption in Kubernetes scheduling?",
    "options": [
      "A) High priority pods can cause lower priority pods to be evicted to make room",
      "B) Nodes preempt pods when they are cordoned",
      "C) System pods preempt user pods regardless of priority",
      "D) Pods preempt network bandwidth from other pods"
    ],
    "correctAnswer": 0,
    "explanation": "If a high-priority pod cannot be scheduled due to lack of resources, the scheduler can preempt (evict) lower-priority pods to free up space for the high-priority pod."
  },
  {
    "id": 157,
    "domain": "Kubernetes Fundamentals",
    "question": "How do you define the priority of a Pod?",
    "options": [
      "A) By setting a PriorityClass and referencing it in the Pod's priorityClassName field",
      "B) By applying a specific label to the Pod",
      "C) By increasing the CPU requests of the Pod",
      "D) By manually placing it on a node using nodeName"
    ],
    "correctAnswer": 0,
    "explanation": "Pod priority is configured by creating a PriorityClass object with an integer value, and then specifying that PriorityClass name in the Pod's specification."
  },
  {
    "id": 158,
    "domain": "Kubernetes Fundamentals",
    "question": "If a node has a taint `key=value:NoSchedule`, what is required for a Pod to be scheduled on it?",
    "options": [
      "A) The Pod must have an affinity rule for `key=value`",
      "B) The Pod must have a matching toleration for `key=value:NoSchedule`",
      "C) The Pod must be in the kube-system namespace",
      "D) The Pod cannot be scheduled on it under any circumstances"
    ],
    "correctAnswer": 1,
    "explanation": "A Pod can only be scheduled on a tainted node if it has a toleration that matches the node's taint key, value, and effect."
  },
  {
    "id": 159,
    "domain": "Kubernetes Fundamentals",
    "question": "How does Kubernetes handle CPU limits under heavy load?",
    "options": [
      "A) The container is killed if it exceeds its CPU limit",
      "B) The container is throttled (slowed down) but not killed",
      "C) The node crashes",
      "D) The pod is evicted to another node"
    ],
    "correctAnswer": 1,
    "explanation": "CPU is a compressible resource. If a container attempts to use more CPU than its limit, it is throttled, but it is not terminated (unlike memory, which causes OOMKills)."
  },
  {
    "id": 160,
    "domain": "Kubernetes Fundamentals",
    "question": "When a Pod has `nodeSelector: disktype: ssd`, and no nodes have the label `disktype: ssd`, what happens?",
    "options": [
      "A) The pod is scheduled on a random node",
      "B) The pod remains in a Pending state",
      "C) The pod's nodeSelector is ignored",
      "D) The cluster provisions a new node automatically"
    ],
    "correctAnswer": 1,
    "explanation": "nodeSelector is a strict requirement. If no node matches the required labels, the scheduler cannot find a valid placement, and the pod stays Pending."
  },
  {
    "id": 161,
    "domain": "Kubernetes Fundamentals",
    "question": "If a Pod specifies resource requests but no limits, what happens if it consumes excessive resources?",
    "options": [
      "A) It is immediately terminated",
      "B) It can consume up to the node's capacity, potentially starving other pods",
      "C) It is throttled to its request amount",
      "D) It cannot consume more than its request amount"
    ],
    "correctAnswer": 1,
    "explanation": "If no limits are set, a container is theoretically unbounded and can consume available resources on the node up to the node's total capacity, unless limited by a namespace ResourceQuota."
  },
  {
    "id": 162,
    "domain": "Kubernetes Fundamentals",
    "question": "What is an OCI-compliant container image?",
    "options": [
      "A) An image that can only run on Docker Engine",
      "B) An image that adheres to the Open Container Initiative industry standards",
      "C) An image containing an Operating System kernel",
      "D) An image specifically built for Kubernetes control planes"
    ],
    "correctAnswer": 1,
    "explanation": "The Open Container Initiative (OCI) defines industry standards for container image formats and runtimes, ensuring that images built with one tool can run on any OCI-compliant runtime."
  },
  {
    "id": 163,
    "domain": "Kubernetes Fundamentals",
    "question": "In Kubernetes, what is the role of the Container Runtime Interface (CRI)?",
    "options": [
      "A) It allows developers to write code in any language",
      "B) It provides a plugin interface enabling kubelet to use a wide variety of container runtimes",
      "C) It is a tool for building container images",
      "D) It provides a graphical dashboard for containers"
    ],
    "correctAnswer": 1,
    "explanation": "The CRI is a plugin interface that allows the kubelet to communicate with different OCI-compliant container runtimes (like containerd or CRI-O) without needing to recompile Kubernetes."
  },
  {
    "id": 164,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following is an example of a popular Kubernetes-compatible container runtime?",
    "options": [
      "A) containerd",
      "B) Jenkins",
      "C) Helm",
      "D) Istio"
    ],
    "correctAnswer": 0,
    "explanation": "containerd is an industry-standard, OCI-compliant core container runtime that is widely used in Kubernetes via the CRI."
  },
  {
    "id": 165,
    "domain": "Kubernetes Fundamentals",
    "question": "How are container images constructed?",
    "options": [
      "A) As a single monolithic binary file",
      "B) As a series of read-only layers",
      "C) As a compressed zip archive of a virtual machine",
      "D) As a dynamic library linked to the host OS"
    ],
    "correctAnswer": 1,
    "explanation": "Container images are built using a layered filesystem. Each instruction in a Dockerfile typically creates a new read-only layer, which are stacked together to form the final image."
  },
  {
    "id": 166,
    "domain": "Kubernetes Fundamentals",
    "question": "Which statement about container images and security is true?",
    "options": [
      "A) Containers are inherently secure and do not require scanning",
      "B) Only the base OS layer needs to be scanned for vulnerabilities",
      "C) Image security scanning should be integrated into the CI/CD pipeline to detect known vulnerabilities",
      "D) Image registries automatically fix vulnerabilities"
    ],
    "correctAnswer": 2,
    "explanation": "It is a best practice to regularly scan container images for known Common Vulnerabilities and Exposures (CVEs) as part of the CI/CD process before deploying them to Kubernetes."
  },
  {
    "id": 167,
    "domain": "Kubernetes Fundamentals",
    "question": "Which of the following is a classic example of a 'sidecar' container?",
    "options": [
      "A) A container that initializes database schemas and exits",
      "B) A logging agent that runs alongside the main application to forward logs",
      "C) A container that runs a cron job every night",
      "D) A container used strictly for building code"
    ],
    "correctAnswer": 1,
    "explanation": "A sidecar container runs alongside the primary application container in the same Pod to provide supporting features, such as log forwarding, proxies (like Envoy), or syncing files."
  },
  {
    "id": 168,
    "domain": "Kubernetes Fundamentals",
    "question": "Why is it recommended to use minimal base images (like Alpine or distroless)?",
    "options": [
      "A) They run faster than standard images",
      "B) They reduce the attack surface and image size by excluding unnecessary tools and libraries",
      "C) They automatically update themselves",
      "D) They do not require a container runtime"
    ],
    "correctAnswer": 1,
    "explanation": "Minimal base images contain only the application and its runtime dependencies. This significantly reduces the size of the image and minimizes the number of potential security vulnerabilities."
  },
  {
    "id": 169,
    "domain": "Kubernetes Fundamentals",
    "question": "When a container finishes its main process and exits, what does Kubernetes do?",
    "options": [
      "A) It deletes the Pod",
      "B) It determines the next action based on the Pod's restartPolicy",
      "C) It scales up the Deployment",
      "D) It cords the node"
    ],
    "correctAnswer": 1,
    "explanation": "The behavior upon container exit is governed by the Pod's restartPolicy (Always, OnFailure, or Never). By default, Kubernetes will try to restart the container (restartPolicy: Always)."
  },
  {
    "id": 170,
    "domain": "Kubernetes Fundamentals",
    "question": "What does the `imagePullPolicy: IfNotPresent` mean in a Pod spec?",
    "options": [
      "A) The kubelet will always pull the image from the registry before starting the container",
      "B) The kubelet will only pull the image if it does not already exist locally on the node",
      "C) The kubelet will never pull the image from a registry",
      "D) The kubelet will pull the image only if it is explicitly tagged 'latest'"
    ],
    "correctAnswer": 1,
    "explanation": "IfNotPresent instructs the kubelet to skip pulling the image if it is already cached on the node's local storage. This speeds up pod startup and reduces network bandwidth."
  },
  {
    "id": 171,
    "domain": "Kubernetes Fundamentals",
    "question": "Which standard defines how container runtimes interact with the operating system to execute containers?",
    "options": [
      "A) Open Container Initiative (OCI) Runtime Specification",
      "B) Container Network Interface (CNI)",
      "C) Container Storage Interface (CSI)",
      "D) Kubernetes API"
    ],
    "correctAnswer": 0,
    "explanation": "The OCI Runtime Specification outlines how a compliant runtime (like runc) unpacks an image and interacts with the OS kernel to run the container."
  },
  {
    "id": 172,
    "domain": "Kubernetes Fundamentals",
    "question": "What feature of Linux kernel makes container isolation possible by restricting what resources a process can see?",
    "options": [
      "A) cgroups",
      "B) namespaces",
      "C) systemd",
      "D) iptables"
    ],
    "correctAnswer": 1,
    "explanation": "Linux namespaces wrap a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the resource (e.g., PID, Network, Mount)."
  },
  {
    "id": 173,
    "domain": "Kubernetes Fundamentals",
    "question": "What feature of Linux kernel allows setting limits on how much CPU or Memory a container can use?",
    "options": [
      "A) cgroups (control groups)",
      "B) namespaces",
      "C) SELinux",
      "D) AppArmor"
    ],
    "correctAnswer": 0,
    "explanation": "cgroups (control groups) are a Linux kernel feature that limits, accounts for, and isolates the resource usage (CPU, memory, disk I/O, etc.) of a collection of processes."
  },
  {
    "id": 174,
    "domain": "Kubernetes Fundamentals",
    "question": "What is CRI-O?",
    "options": [
      "A) A Kubernetes network plugin",
      "B) A lightweight container runtime specifically built for Kubernetes",
      "C) A tool for creating Dockerfiles",
      "D) A cluster monitoring tool"
    ],
    "correctAnswer": 1,
    "explanation": "CRI-O is an implementation of the Kubernetes CRI (Container Runtime Interface) to enable using OCI compatible runtimes. It is meant to be a lightweight alternative to using Docker as the runtime for Kubernetes."
  },
  {
    "id": 175,
    "domain": "Kubernetes Fundamentals",
    "question": "What happens when you add a new command to a Dockerfile and rebuild the image?",
    "options": [
      "A) The entire image must be downloaded from scratch by clients",
      "B) Docker builds a new layer on top of the existing cached layers, saving time",
      "C) The base OS is upgraded automatically",
      "D) The image loses its OCI compliance"
    ],
    "correctAnswer": 1,
    "explanation": "Container image builds are layer-based. Modifying or adding a command towards the end of a Dockerfile allows the build system to reuse previously cached layers, making builds faster."
  },
  {
    "id": 176,
    "domain": "Kubernetes Fundamentals",
    "question": "If a pod has a single container that crashes and the restartPolicy is set to 'Never', what is the pod's resulting phase?",
    "options": [
      "A) Running",
      "B) Failed",
      "C) Pending",
      "D) Succeeded"
    ],
    "correctAnswer": 1,
    "explanation": "If a container within a pod terminates with a non-zero exit code and the restartPolicy is 'Never', the pod will enter the 'Failed' phase."
  },
  {
    "id": 177,
    "domain": "Container Orchestration",
    "question": "Which of the following is a fundamental principle of the Kubernetes networking model?",
    "options": [
      "A) Pods must use NAT to communicate with pods on other nodes",
      "B) Every node must run a software-defined router",
      "C) All Pods can communicate with all other Pods without NAT",
      "D) Network communication is strictly limited to Pods within the same Namespace"
    ],
    "correctAnswer": 2,
    "explanation": "Kubernetes requires that all Pods can communicate with all other Pods across the cluster without Network Address Translation (NAT). This provides a clean, flat network model."
  },
  {
    "id": 178,
    "domain": "Container Orchestration",
    "question": "Which Kubernetes Service type exposes a service on a static port on each Node's IP address?",
    "options": [
      "A) ClusterIP",
      "B) NodePort",
      "C) LoadBalancer",
      "D) ExternalName"
    ],
    "correctAnswer": 1,
    "explanation": "A NodePort service exposes the Service on each Node's IP at a static port. A ClusterIP service, to which the NodePort service routes, is automatically created."
  },
  {
    "id": 179,
    "domain": "Container Orchestration",
    "question": "How does the ExternalName Service type route traffic?",
    "options": [
      "A) By load balancing traffic to an external IP pool",
      "B) By assigning a public IP directly to a Pod",
      "C) By returning a CNAME record with the specified external DNS name",
      "D) By creating an external load balancer in the cloud provider"
    ],
    "correctAnswer": 2,
    "explanation": "Services of type ExternalName map a Service to a DNS name, not to a typical selector. They return a CNAME record with the specified value, allowing internal components to access external services seamlessly."
  },
  {
    "id": 180,
    "domain": "Container Orchestration",
    "question": "Which component is primarily responsible for watching Services and Endpoints to configure network routing rules on worker nodes?",
    "options": [
      "A) kube-apiserver",
      "B) kubelet",
      "C) kube-proxy",
      "D) CoreDNS"
    ],
    "correctAnswer": 2,
    "explanation": "kube-proxy runs on each node and is responsible for maintaining network rules (like iptables or IPVS) that allow network communication to Pods from inside or outside the cluster."
  },
  {
    "id": 181,
    "domain": "Container Orchestration",
    "question": "Why is an Ingress Controller required in a Kubernetes cluster?",
    "options": [
      "A) To authenticate users accessing the Kubernetes API",
      "B) To fulfill the rules defined by Ingress resources",
      "C) To manage the cluster's internal DNS resolution",
      "D) To provision PersistentVolumes for stateful applications"
    ],
    "correctAnswer": 1,
    "explanation": "An Ingress resource by itself does nothing. You must have an Ingress controller (like nginx or HAProxy) running in the cluster to actively satisfy the Ingress rules and route traffic."
  },
  {
    "id": 182,
    "domain": "Container Orchestration",
    "question": "What software is the default DNS server for service discovery in modern Kubernetes clusters?",
    "options": [
      "A) KubeDNS",
      "B) BIND",
      "C) dnsmasq",
      "D) CoreDNS"
    ],
    "correctAnswer": 3,
    "explanation": "CoreDNS is a flexible, extensible DNS server that can serve as the Kubernetes cluster DNS. It is the default DNS server for Kubernetes service discovery."
  },
  {
    "id": 183,
    "domain": "Container Orchestration",
    "question": "Which kube-proxy mode offers better performance and scalability by using a hash table instead of sequential rules?",
    "options": [
      "A) userspace",
      "B) iptables",
      "C) IPVS",
      "D) eBPF"
    ],
    "correctAnswer": 2,
    "explanation": "IPVS (IP Virtual Server) mode uses hash tables for routing traffic, which offers much better performance and scalability for clusters with thousands of services compared to iptables."
  },
  {
    "id": 184,
    "domain": "Container Orchestration",
    "question": "How does Kubernetes typically expose service IP addresses and ports to a newly created Pod without using DNS?",
    "options": [
      "A) By writing them to a shared ConfigMap",
      "B) By injecting them as environment variables",
      "C) By mounting a secret containing the routing table",
      "D) By updating the Pod's /etc/hosts file"
    ],
    "correctAnswer": 1,
    "explanation": "Before DNS was the standard, and still today, the kubelet injects a set of environment variables into a Pod for each active Service when the Pod is created."
  },
  {
    "id": 185,
    "domain": "Container Orchestration",
    "question": "What is required for a NetworkPolicy to take effect in a Kubernetes cluster?",
    "options": [
      "A) A LoadBalancer service must be configured",
      "B) The cluster must be using a CNI plugin that supports NetworkPolicies",
      "C) The kube-proxy mode must be set to IPVS",
      "D) All pods must be in the 'default' namespace"
    ],
    "correctAnswer": 1,
    "explanation": "NetworkPolicies are implemented by the network plugin. If you create a NetworkPolicy without a CNI that supports it (like Calico or Cilium), the policy will simply be ignored."
  },
  {
    "id": 186,
    "domain": "Container Orchestration",
    "question": "When a Pod communicates with another Pod on a different node, what happens to the source IP of the packet?",
    "options": [
      "A) It is translated to the node's IP address (SNAT)",
      "B) It is translated to the API server's IP address",
      "C) It remains the IP address of the source Pod",
      "D) It is masked by the cluster's egress gateway"
    ],
    "correctAnswer": 2,
    "explanation": "According to the Kubernetes networking model, Pods communicate with each other using their real IP addresses without NAT, regardless of which node they reside on."
  },
  {
    "id": 187,
    "domain": "Container Orchestration",
    "question": "In Kubernetes RBAC, what is the primary difference between a Role and a ClusterRole?",
    "options": [
      "A) A Role manages pods, while a ClusterRole manages nodes",
      "B) A Role is limited to a specific namespace, while a ClusterRole is cluster-scoped",
      "C) A Role grants read access, while a ClusterRole grants write access",
      "D) A Role can only be assigned to users, while a ClusterRole is for service accounts"
    ],
    "correctAnswer": 1,
    "explanation": "A Role always sets permissions within a particular namespace. A ClusterRole is a non-namespaced resource that can grant the same permissions as a Role, but across the entire cluster."
  },
  {
    "id": 188,
    "domain": "Container Orchestration",
    "question": "What does Kubernetes automatically mount into every Pod by default to allow API access?",
    "options": [
      "A) A root SSL certificate",
      "B) A kubeconfig file",
      "C) A ServiceAccount token",
      "D) An SSH private key"
    ],
    "correctAnswer": 2,
    "explanation": "By default, Kubernetes mounts a ServiceAccount token into every Pod at /var/run/secrets/kubernetes.io/serviceaccount, allowing the Pod to authenticate with the API server."
  },
  {
    "id": 189,
    "domain": "Container Orchestration",
    "question": "Which field in a Pod specification allows you to run a container as a non-root user?",
    "options": [
      "A) PodSecurityPolicy",
      "B) SecurityContext",
      "C) UserAuthorization",
      "D) PrivilegeEscalation"
    ],
    "correctAnswer": 1,
    "explanation": "The SecurityContext field in a Pod or Container spec defines privilege and access control settings, including runAsUser, which forces the container to run as a specific non-root user."
  },
  {
    "id": 190,
    "domain": "Container Orchestration",
    "question": "To implement a default-deny ingress posture for a namespace, what should you do?",
    "options": [
      "A) Delete the namespace's default service account",
      "B) Create a NetworkPolicy that selects all pods but allows no ingress traffic",
      "C) Remove all Roles and RoleBindings from the namespace",
      "D) Set the namespace's isolation annotation to true"
    ],
    "correctAnswer": 1,
    "explanation": "Creating a NetworkPolicy with an empty podSelector ({}) and specifying Ingress in policyTypes without any rules establishes a default-deny posture for all pods in that namespace."
  },
  {
    "id": 191,
    "domain": "Container Orchestration",
    "question": "Which Kubernetes component can intercept requests to the API server to modify them before they are saved?",
    "options": [
      "A) ValidatingAdmissionWebhook",
      "B) MutatingAdmissionWebhook",
      "C) Kube-proxy",
      "D) Controller Manager"
    ],
    "correctAnswer": 1,
    "explanation": "A MutatingAdmissionWebhook intercepts requests to the API server and can modify (mutate) the object before it is authenticated, authorized, and persisted to etcd."
  },
  {
    "id": 192,
    "domain": "Container Orchestration",
    "question": "Under the Pod Security Standards, which policy level is aimed at providing a secure baseline while allowing standard application execution?",
    "options": [
      "A) Privileged",
      "B) Restricted",
      "C) Baseline",
      "D) Strict"
    ],
    "correctAnswer": 2,
    "explanation": "The Baseline policy level prevents known privilege escalations while causing minimal friction for standard workload configurations."
  },
  {
    "id": 193,
    "domain": "Container Orchestration",
    "question": "What mechanism is typically used to verify the authenticity and origin of a container image?",
    "options": [
      "A) Image signing (e.g., using Cosign or Notary)",
      "B) Image tag immutability",
      "C) Container runtime encryption",
      "D) Base64 encoding the image manifest"
    ],
    "correctAnswer": 0,
    "explanation": "Image signing allows developers to attach cryptographic signatures to images. Tools like Cosign (part of Sigstore) enable clusters to verify that the image came from a trusted source."
  },
  {
    "id": 194,
    "domain": "Container Orchestration",
    "question": "In the context of Kubernetes RBAC, what binds a Role to a set of subjects (users, groups, or service accounts)?",
    "options": [
      "A) ClusterRole",
      "B) SubjectBinding",
      "C) RoleBinding",
      "D) PolicyRule"
    ],
    "correctAnswer": 2,
    "explanation": "A RoleBinding grants the permissions defined in a Role to a user or set of users (subjects) within a specific namespace."
  },
  {
    "id": 195,
    "domain": "Container Orchestration",
    "question": "Why is it recommended to mount Kubernetes Secrets as volumes instead of passing them as environment variables?",
    "options": [
      "A) Environment variables cannot store strings longer than 256 characters",
      "B) Environment variables are visible to anyone who can run 'docker inspect' or check pod configurations",
      "C) Volumes automatically encrypt data at rest on the node's disk",
      "D) Volumes consume less RAM than environment variables"
    ],
    "correctAnswer": 1,
    "explanation": "Environment variables can easily be exposed via logging tools, crash dumps, or inspection commands. Mounting secrets as volumes stores them in a temporary file system (tmpfs) which is more secure."
  },
  {
    "id": 196,
    "domain": "Container Orchestration",
    "question": "What process verifies the identity of a user or service attempting to communicate with the Kubernetes API?",
    "options": [
      "A) Authorization",
      "B) Authentication",
      "C) Admission Control",
      "D) Network Policies"
    ],
    "correctAnswer": 1,
    "explanation": "Authentication is the process of verifying 'who' is making the request. Authorization determines 'what' that authenticated user is allowed to do."
  },
  {
    "id": 197,
    "domain": "Container Orchestration",
    "question": "Which Kubernetes resource can be used to request a certificate from the cluster's internal Certificate Authority?",
    "options": [
      "A) CertificateSigningRequest (CSR)",
      "B) TLSSecret",
      "C) IngressCertificate",
      "D) ClusterIssuer"
    ],
    "correctAnswer": 0,
    "explanation": "A CertificateSigningRequest (CSR) resource allows you to request that a certificate be signed by the Kubernetes cluster CA or a configured external signer."
  },
  {
    "id": 198,
    "domain": "Container Orchestration",
    "question": "What happens if a ValidatingAdmissionWebhook rejects an API request?",
    "options": [
      "A) The object is saved to etcd but marked as 'Failed'",
      "B) The API server returns an error and the object is not created or modified",
      "C) The request is forwarded to a MutatingAdmissionWebhook for correction",
      "D) The scheduler places the pod on a quarantined node"
    ],
    "correctAnswer": 1,
    "explanation": "If a ValidatingAdmissionWebhook rejects the request, the API server stops the request immediately, returns an error to the user, and no changes are persisted to etcd."
  },
  {
    "id": 199,
    "domain": "Container Orchestration",
    "question": "What does the Pod status 'CrashLoopBackOff' indicate?",
    "options": [
      "A) The pod's container has repeatedly exited and Kubernetes is waiting before restarting it",
      "B) The node running the pod has crashed and needs to be rebooted",
      "C) The pod's image cannot be pulled from the registry",
      "D) The pod has exceeded its memory limit and cannot be scheduled"
    ],
    "correctAnswer": 0,
    "explanation": "CrashLoopBackOff means a container within the pod is repeatedly failing and exiting. The kubelet backs off (waits) an increasing amount of time between restart attempts."
  },
  {
    "id": 200,
    "domain": "Container Orchestration",
    "question": "If a pod is stuck in the 'Pending' state, what is the most likely cause?",
    "options": [
      "A) The container application crashed immediately upon startup",
      "B) The pod lacks an active Liveness Probe",
      "C) The scheduler cannot find a node with enough available resources to place the pod",
      "D) The pod's service account does not have RBAC permissions to run"
    ],
    "correctAnswer": 2,
    "explanation": "A 'Pending' state typically means the pod has been accepted by the cluster, but the scheduler cannot place it on a node, often due to insufficient CPU, memory, or unsatisfied node constraints."
  },
  {
    "id": 201,
    "domain": "Container Orchestration",
    "question": "What does the 'ImagePullBackOff' status mean?",
    "options": [
      "A) The image has been deprecated and Kubernetes refuses to run it",
      "B) The kubelet failed to pull the container image from the registry",
      "C) The image is too large for the node's disk",
      "D) The pod's image tag was updated while running"
    ],
    "correctAnswer": 1,
    "explanation": "ImagePullBackOff occurs when the kubelet cannot pull the specified container image, perhaps due to a typo in the image name, wrong registry credentials, or network issues."
  },
  {
    "id": 202,
    "domain": "Container Orchestration",
    "question": "If a Service is not routing traffic to your pods, which resource should you check first to ensure the Service selectors match the pods?",
    "options": [
      "A) Endpoints or EndpointSlices",
      "B) NetworkPolicies",
      "C) IngressRules",
      "D) KubeProxyLogs"
    ],
    "correctAnswer": 0,
    "explanation": "Services route traffic to Endpoints. Checking the Endpoints resource ('kubectl get endpoints') shows whether the Service has successfully discovered the pods matching its selector."
  },
  {
    "id": 203,
    "domain": "Container Orchestration",
    "question": "What action does Kubernetes take if a container's Liveness Probe fails consistently?",
    "options": [
      "A) It removes the pod's IP from the Service endpoints",
      "B) It stops routing external traffic to the node",
      "C) It restarts the container",
      "D) It evicts the pod to another node"
    ],
    "correctAnswer": 2,
    "explanation": "A Liveness Probe determines if a container is running healthily. If it fails, the kubelet kills the container, and it is subjected to its restart policy."
  },
  {
    "id": 204,
    "domain": "Container Orchestration",
    "question": "Which command allows you to open an interactive shell inside a running pod?",
    "options": [
      "A) kubectl run -it <pod-name> -- /bin/sh",
      "B) kubectl exec -it <pod-name> -- /bin/sh",
      "C) kubectl shell <pod-name>",
      "D) kubectl attach -it <pod-name>"
    ],
    "correctAnswer": 1,
    "explanation": "The 'kubectl exec' command executes a command in a container. Using the '-it' flags allocates a TTY and connects stdin, allowing for an interactive shell session."
  },
  {
    "id": 205,
    "domain": "Container Orchestration",
    "question": "If you see a pod terminated with the reason 'OOMKilled', what caused it?",
    "options": [
      "A) The node ran out of disk space",
      "B) The pod exceeded its defined memory limit",
      "C) The pod's CPU usage spiked above its limit",
      "D) The OutOfOrderManager terminated a duplicate pod"
    ],
    "correctAnswer": 1,
    "explanation": "OOMKilled (Out of Memory Killed) occurs when a container attempts to use more memory than its configured resource limit, causing the kernel or container runtime to kill it."
  },
  {
    "id": 206,
    "domain": "Container Orchestration",
    "question": "What happens when a node experiences heavy resource starvation (like disk pressure or memory pressure)?",
    "options": [
      "A) It automatically scales up by provisioning a new node",
      "B) The kubelet begins evicting pods to reclaim resources",
      "C) The API server temporarily shuts down the kubelet",
      "D) It pauses all running containers"
    ],
    "correctAnswer": 1,
    "explanation": "When a node falls under severe pressure (e.g., DiskPressure, MemoryPressure), the kubelet proactively evicts pods to reclaim resources and ensure the node's stability."
  },
  {
    "id": 207,
    "domain": "Container Orchestration",
    "question": "If a worker node shows a status of 'NotReady', what does this indicate?",
    "options": [
      "A) The node is currently downloading new container images",
      "B) The kubelet on the node stopped reporting healthy status to the API server",
      "C) The node is actively draining its pods",
      "D) The node has not been assigned any pods yet"
    ],
    "correctAnswer": 1,
    "explanation": "A 'NotReady' status means the API server has lost contact with the kubelet on that node, or the kubelet has reported that it is in an unhealthy state."
  },
  {
    "id": 208,
    "domain": "Container Orchestration",
    "question": "Why might 'kubectl get events' be more useful than 'kubectl describe pod' for cluster-wide troubleshooting?",
    "options": [
      "A) Events show logs from inside the containers",
      "B) Events provide a chronological timeline of activities across multiple resources in a namespace",
      "C) Events automatically highlight configuration syntax errors",
      "D) Events are stored permanently in etcd"
    ],
    "correctAnswer": 1,
    "explanation": "Events provide a timeline of state changes and errors across the entire namespace (like scheduling decisions, image pulls, and probe failures), making it easier to correlate cluster-wide issues."
  },
  {
    "id": 209,
    "domain": "Container Orchestration",
    "question": "What Kubernetes resource enables dynamic volume provisioning without requiring administrators to manually create PVs in advance?",
    "options": [
      "A) VolumeSnapshot",
      "B) StatefulSet",
      "C) StorageClass",
      "D) CSI Driver"
    ],
    "correctAnswer": 2,
    "explanation": "A StorageClass describes the 'classes' of storage offered. When a PVC specifies a StorageClass, it triggers dynamic provisioning, automatically creating the storage and a matching PV."
  },
  {
    "id": 210,
    "domain": "Container Orchestration",
    "question": "What happens to the data in an emptyDir volume when a pod is removed from a node?",
    "options": [
      "A) It is archived to the API server",
      "B) It is transferred to the new node where the pod is scheduled",
      "C) It is permanently deleted",
      "D) It persists on the node for future pods to use"
    ],
    "correctAnswer": 2,
    "explanation": "An emptyDir volume is initially empty and shares the pod's lifecycle. When a pod is removed from a node for any reason, the data in the emptyDir is permanently deleted."
  },
  {
    "id": 211,
    "domain": "Container Orchestration",
    "question": "Which volume type allows a pod to mount a file or directory from the host node's filesystem?",
    "options": [
      "A) emptyDir",
      "B) hostPath",
      "C) local",
      "D) nfs"
    ],
    "correctAnswer": 1,
    "explanation": "A hostPath volume mounts a file or directory from the host node's filesystem into a pod. It is often used by system-level daemons that need access to node files."
  },
  {
    "id": 212,
    "domain": "Container Orchestration",
    "question": "What does the access mode 'ReadWriteOnce' (RWO) signify for a PersistentVolume?",
    "options": [
      "A) The volume can only be read once before being deleted",
      "B) The volume can be mounted as read-write by a single node at a time",
      "C) The volume can be mounted as read-write by multiple nodes simultaneously",
      "D) The volume is read-only but can be written to exactly once during initialization"
    ],
    "correctAnswer": 1,
    "explanation": "ReadWriteOnce means the volume can be mounted as read-write by a single node. This is typical for block storage like AWS EBS or GCP Persistent Disks."
  },
  {
    "id": 213,
    "domain": "Container Orchestration",
    "question": "Which access mode is typically required if multiple pods across different nodes need to write to the same volume simultaneously?",
    "options": [
      "A) ReadWriteOnce (RWO)",
      "B) ReadOnlyMany (ROX)",
      "C) ReadWriteMany (RWX)",
      "D) ReadWriteOncePod (RWOP)"
    ],
    "correctAnswer": 2,
    "explanation": "ReadWriteMany (RWX) allows the volume to be mounted as read-write by many nodes simultaneously. It is usually supported by file-based network storage like NFS or EFS."
  },
  {
    "id": 214,
    "domain": "Container Orchestration",
    "question": "What does CSI stand for in the context of Kubernetes storage?",
    "options": [
      "A) Cluster Storage Interface",
      "B) Container Storage Interface",
      "C) Cloud Storage Integration",
      "D) Core Storage Implementation"
    ],
    "correctAnswer": 1,
    "explanation": "The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads, removing the need for in-tree volume plugins."
  },
  {
    "id": 215,
    "domain": "Container Orchestration",
    "question": "If a PVC is deleted and the bound PV has a reclaim policy of 'Retain', what happens to the PV and its data?",
    "options": [
      "A) The PV is deleted, but the data on the backend is kept",
      "B) The PV and the underlying data are automatically deleted",
      "C) The PV goes into a 'Released' state and the data is preserved",
      "D) The PV is automatically reformatted and bound to a new PVC"
    ],
    "correctAnswer": 2,
    "explanation": "With the 'Retain' reclaim policy, when the PVC is deleted, the PV is considered 'Released' but is not deleted or wiped. The administrator must manually reclaim the volume."
  },
  {
    "id": 216,
    "domain": "Container Orchestration",
    "question": "What is a key benefit of using Ephemeral Volumes (like generic ephemeral volumes) over traditional PVCs?",
    "options": [
      "A) They can be shared across multiple namespaces",
      "B) They automatically migrate data between nodes",
      "C) Their lifecycle is tied to the Pod, so they are automatically cleaned up when the Pod terminates",
      "D) They bypass the network stack for faster read times"
    ],
    "correctAnswer": 2,
    "explanation": "Ephemeral volumes are designed to live only as long as the pod. When the pod stops, the ephemeral volume is automatically deleted, preventing storage leakage for scratch data."
  },
  {
    "id": 217,
    "domain": "Container Orchestration",
    "question": "If the reclaim policy of a StorageClass is set to 'Delete', what occurs when a user deletes their PVC?",
    "options": [
      "A) The PV is retained but marked as ReadOnly",
      "B) Both the PV and the underlying storage infrastructure (like an EBS volume) are deleted",
      "C) Only the PV is deleted; the cloud provider storage is retained",
      "D) The PVC deletion is blocked until an admin approves it"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Delete' reclaim policy instructs Kubernetes to delete both the PersistentVolume object from the cluster and the associated storage asset in the external infrastructure."
  },
  {
    "id": 218,
    "domain": "Container Orchestration",
    "question": "Which API resources are involved in creating a point-in-time copy of a PersistentVolume?",
    "options": [
      "A) VolumeBackup and BackupClaim",
      "B) VolumeSnapshot and VolumeSnapshotClass",
      "C) StorageClone and CloneClass",
      "D) PVCSnapshot and PVSnapshot"
    ],
    "correctAnswer": 1,
    "explanation": "Volume snapshots are managed using VolumeSnapshot, VolumeSnapshotContent, and VolumeSnapshotClass resources. This requires a CSI driver that supports snapshot capabilities."
  },
  {
    "id": 219,
    "domain": "Container Orchestration",
    "question": "What is required for a Pod to use a Secret as a volume?",
    "options": [
      "A) The Secret must be encrypted with a KMS provider",
      "B) The Pod and the Secret must reside in the same Namespace",
      "C) The Pod must be running with cluster-admin privileges",
      "D) The Secret must be explicitly defined in a StorageClass"
    ],
    "correctAnswer": 1,
    "explanation": "Secrets are namespaced resources. A Pod can only reference and mount a Secret if both the Pod and the Secret exist within the same namespace."
  },
  {
    "id": 220,
    "domain": "Container Orchestration",
    "question": "Which of the following describes a 'local' persistent volume?",
    "options": [
      "A) A volume provisioned on the developer's laptop",
      "B) A volume that stores data in the Pod's memory (tmpfs)",
      "C) A volume representing a mounted local disk directly attached to a single Kubernetes node",
      "D) A cloud-based block storage volume attached to the cluster"
    ],
    "correctAnswer": 2,
    "explanation": "A 'local' PV represents a mounted local storage device such as a disk, partition, or directory on a specific node. The scheduler ensures pods using the PVC are scheduled to that specific node."
  },
  {
    "id": 221,
    "domain": "Cloud Native Application Delivery",
    "question": "How does Kustomize differ from Helm in managing Kubernetes manifests?",
    "options": [
      "A) Kustomize is a template engine, while Helm is only a registry.",
      "B) Kustomize uses a template-free, overlay-based approach to customize raw YAML files.",
      "C) Kustomize requires a server-side component to be installed in the cluster.",
      "D) Kustomize only works with Pod resources, whereas Helm supports all resource types."
    ],
    "correctAnswer": 1,
    "explanation": "Unlike Helm, which relies on a templating engine (like Go templates) and parameter substitution, Kustomize takes a template-free approach. It uses a base manifest and applies overlays to patch or customize the YAML natively."
  },
  {
    "id": 222,
    "domain": "Cloud Native Application Delivery",
    "question": "Which deployment strategy routes a small percentage of traffic to a new version of an application to test it before a full rollout?",
    "options": [
      "A) Blue-Green deployment",
      "B) Rolling update",
      "C) Recreate deployment",
      "D) Canary deployment"
    ],
    "correctAnswer": 3,
    "explanation": "A Canary deployment introduces a new version of an application to a small subset of users (a 'canary' group) before rolling it out to the entire infrastructure. This minimizes risk by testing the new version with live traffic."
  },
  {
    "id": 223,
    "domain": "Cloud Native Application Delivery",
    "question": "Which of the following tools are primarily associated with the GitOps model for continuous delivery in Kubernetes?",
    "options": [
      "A) Prometheus and Grafana",
      "B) Fluentd and Jaeger",
      "C) Argo CD and Flux",
      "D) Docker Swarm and Mesos"
    ],
    "correctAnswer": 2,
    "explanation": "Argo CD and Flux are two of the most popular continuous delivery tools designed specifically for Kubernetes that implement GitOps principles. They continuously monitor a Git repository and apply the desired state to the cluster."
  },
  {
    "id": 224,
    "domain": "Cloud Native Application Delivery",
    "question": "When configuring a continuous integration (CI) pipeline, which step typically happens immediately after code is committed and tests have passed?",
    "options": [
      "A) Provisioning new hardware nodes",
      "B) Building the container image and pushing it to a registry",
      "C) Scaling the database horizontally",
      "D) Performing a chaos engineering experiment"
    ],
    "correctAnswer": 1,
    "explanation": "In a typical CI/CD pipeline, once code is integrated and tests pass, the next logical step is to build an executable artifact\u2014in the cloud-native world, this is building the container image and pushing it to a container registry."
  },
  {
    "id": 225,
    "domain": "Cloud Native Application Delivery",
    "question": "Which feature of Kustomize allows you to create variations of your application (e.g., dev, staging, prod) without duplicating the core resource files?",
    "options": [
      "A) Bases and Overlays",
      "B) Charts and Values",
      "C) Taints and Tolerations",
      "D) Requests and Limits"
    ],
    "correctAnswer": 0,
    "explanation": "Kustomize uses 'bases' (the common, reusable resource definitions) and 'overlays' (environment-specific patches). This allows administrators to define a base once and apply specific overlays for environments like dev, staging, or production."
  },
  {
    "id": 226,
    "domain": "Cloud Native Application Delivery",
    "question": "In the context of Helm, what is a 'release'?",
    "options": [
      "A) A new version of the Helm CLI tool.",
      "B) A specific version of a Helm chart downloaded from a repository.",
      "C) An instance of a chart running in a Kubernetes cluster.",
      "D) The process of publishing a chart to a public registry."
    ],
    "correctAnswer": 2,
    "explanation": "When you install a Helm chart, a 'release' is created. A release is a specific, running instance of a chart in a Kubernetes cluster. You can install the same chart multiple times, and each time it will generate a new release."
  },
  {
    "id": 227,
    "domain": "Cloud Native Application Delivery",
    "question": "Why is an 'infrastructure as code' (IaC) approach beneficial for cloud-native application delivery?",
    "options": [
      "A) It prevents developers from having to write application code.",
      "B) It allows infrastructure environments to be versioned, reviewed, and reliably reproduced.",
      "C) It encrypts network traffic between pods by default.",
      "D) It ensures that container images are scanned for vulnerabilities automatically."
    ],
    "correctAnswer": 1,
    "explanation": "Infrastructure as Code (IaC) allows operators to define their infrastructure in machine-readable definition files. This makes infrastructure versionable, auditable, and easily reproducible, aligning perfectly with GitOps and CI/CD principles."
  },
  {
    "id": 228,
    "domain": "Cloud Native Application Delivery",
    "question": "What role does a container registry play in continuous delivery?",
    "options": [
      "A) It acts as a database to store application persistent data.",
      "B) It serves as the definitive storage location where built container images are hosted and pulled from.",
      "C) It compiles source code into machine code.",
      "D) It enforces network security policies across clusters."
    ],
    "correctAnswer": 1,
    "explanation": "A container registry is the central repository where CI pipelines push built container images. During the continuous delivery (CD) phase, Kubernetes nodes pull these images from the registry to run the application containers."
  },
  {
    "id": 229,
    "domain": "Cloud Native Application Delivery",
    "question": "Which of the following is true about 'Progressive Delivery'?",
    "options": [
      "A) It is the process of manually deploying code to production servers via SSH.",
      "B) It releases updates to users gradually, combining deployment strategies like canaries with observability to limit blast radius.",
      "C) It mandates that all application updates must be rolled out to all users simultaneously.",
      "D) It replaces the need for version control systems."
    ],
    "correctAnswer": 1,
    "explanation": "Progressive delivery is a modern approach to continuous delivery that involves releasing updates in a controlled, gradual manner (using canaries or feature flags) and using metrics to automatically pause or rollback if issues are detected."
  },
  {
    "id": 230,
    "domain": "Cloud Native Application Delivery",
    "question": "When applying a GitOps workflow with a tool like Argo CD, what happens if an administrator manually modifies a Kubernetes Deployment using 'kubectl edit'?",
    "options": [
      "A) The Git repository is automatically updated to reflect the manual change.",
      "B) Argo CD detects a configuration drift and can automatically revert the manual change to match the Git repository.",
      "C) Argo CD deletes the Deployment because manual edits are forbidden.",
      "D) The cluster immediately crashes due to a state mismatch."
    ],
    "correctAnswer": 1,
    "explanation": "In a GitOps model, Git is the single source of truth. If manual changes are made in the cluster (configuration drift), GitOps operators like Argo CD will detect the mismatch and can automatically reconcile the cluster state back to the state defined in Git."
  },
  {
    "id": 231,
    "domain": "Cloud Native Application Delivery",
    "question": "Which of the following Kubernetes features allows you to run a temporary container inside an existing running Pod specifically for troubleshooting?",
    "options": [
      "A) Init containers",
      "B) DaemonSets",
      "C) Ephemeral containers",
      "D) Sidecar containers"
    ],
    "correctAnswer": 2,
    "explanation": "Ephemeral containers are temporary containers that can be injected into an already running Pod. They are extremely useful for debugging, especially when the main application container lacks debugging tools (like shell or curl) due to being built from a distroless image."
  },
  {
    "id": 232,
    "domain": "Cloud Native Application Delivery",
    "question": "A Pod's status is showing as 'CrashLoopBackOff'. What does this indicate?",
    "options": [
      "A) The container image cannot be pulled from the registry.",
      "B) The container is repeatedly starting, failing, and exiting, causing Kubernetes to wait increasing intervals before restarting it.",
      "C) The node running the Pod has exhausted its memory resources.",
      "D) The Kubernetes API server is unreachable."
    ],
    "correctAnswer": 1,
    "explanation": "CrashLoopBackOff means the application container is repeatedly failing (crashing) immediately after it starts. Kubernetes recognizes this and applies a back-off delay (increasing the wait time) between restart attempts to prevent resource exhaustion."
  },
  {
    "id": 233,
    "domain": "Cloud Native Application Delivery",
    "question": "If a Pod is terminated with the reason 'OOMKilled', what caused the termination?",
    "options": [
      "A) The node lost network connectivity.",
      "B) The container attempted to use more memory than its specified memory limit.",
      "C) The container failed its liveness probe.",
      "D) The Pod was evicted due to disk pressure."
    ],
    "correctAnswer": 1,
    "explanation": "OOMKilled stands for 'Out Of Memory Killed'. It occurs when a container attempts to consume more memory than the limit defined in its resource limits, prompting the kernel to terminate the process."
  },
  {
    "id": 234,
    "domain": "Cloud Native Application Delivery",
    "question": "When troubleshooting why a Pod is stuck in the 'Pending' state, which command is most likely to reveal the reason (e.g., insufficient CPU on nodes)?",
    "options": [
      "A) kubectl logs",
      "B) kubectl exec",
      "C) kubectl describe pod",
      "D) kubectl port-forward"
    ],
    "correctAnswer": 2,
    "explanation": "'kubectl describe pod' provides detailed information about a Pod, including its current state and recent events. If a Pod is Pending due to scheduling issues (like insufficient resources), the events section will show the scheduler's error messages."
  },
  {
    "id": 235,
    "domain": "Cloud Native Application Delivery",
    "question": "If a Kubernetes Service is not routing traffic to your Pods, which of the following is the most likely configuration issue to check first?",
    "options": [
      "A) The image pull policy of the Pod.",
      "B) Whether the Service's selector labels match the labels on the Pods.",
      "C) The storage class used by the persistent volume.",
      "D) The CPU limits defined in the Pod specification."
    ],
    "correctAnswer": 1,
    "explanation": "Kubernetes Services route traffic to Pods using label selectors. If the labels defined in the Service's selector do not exactly match the labels on the Pods, the Service will have no endpoints and will not route traffic to them."
  },
  {
    "id": 236,
    "domain": "Cloud Native Application Delivery",
    "question": "You want to run a shell command interactively inside an existing, running container named 'app' inside 'my-pod'. Which command achieves this?",
    "options": [
      "A) kubectl attach my-pod -c app",
      "B) kubectl exec -it my-pod -c app -- /bin/sh",
      "C) kubectl run my-pod -- /bin/sh",
      "D) kubectl debug my-pod -c app"
    ],
    "correctAnswer": 1,
    "explanation": "The 'kubectl exec' command allows you to execute commands in a container. Using the '-it' flags allocates a TTY and keeps stdin open, allowing you to interactively use a shell like /bin/sh or /bin/bash."
  },
  {
    "id": 237,
    "domain": "Cloud Native Application Delivery",
    "question": "A Pod status shows 'ImagePullBackOff'. What is the most common cause of this error?",
    "options": [
      "A) The application process crashed immediately upon startup.",
      "B) The kubelet failed to pull the container image because the image does not exist or authentication failed.",
      "C) The Pod failed its liveness probe and is being restarted.",
      "D) The node ran out of disk space to store local logs."
    ],
    "correctAnswer": 1,
    "explanation": "ImagePullBackOff indicates that Kubernetes is unable to retrieve the container image from the registry. Common causes include a typo in the image name or tag, pulling from a private registry without configuring imagePullSecrets, or the registry being unreachable."
  },
  {
    "id": 238,
    "domain": "Cloud Native Application Delivery",
    "question": "In a cloud-native environment, what is the role of a 'Distributed Tracing' system (like Jaeger)?",
    "options": [
      "A) To monitor CPU utilization across physical nodes.",
      "B) To track and visualize the journey of a single request as it travels across multiple microservices.",
      "C) To securely distribute secrets to pods.",
      "D) To aggregate all standard output logs into a central database."
    ],
    "correctAnswer": 1,
    "explanation": "Distributed tracing is used to monitor and profile applications built on microservices. It tracks a single request as it propagates through different services, helping developers identify latency bottlenecks and points of failure in complex architectures."
  },
  {
    "id": 239,
    "domain": "Cloud Native Application Delivery",
    "question": "Why is centralized log aggregation (using tools like Fluentd, Elasticsearch, and Kibana) crucial in Kubernetes?",
    "options": [
      "A) It is required by Kubernetes to successfully schedule Pods.",
      "B) Pods are ephemeral, and their local logs are lost when the Pod is deleted or evicted.",
      "C) It prevents applications from crashing by clearing their log files.",
      "D) Centralized logs automatically restart failing containers."
    ],
    "correctAnswer": 1,
    "explanation": "Because Pods are ephemeral and can be destroyed, restarted, or rescheduled dynamically, their local log files are temporary. Centralized log aggregation collects logs continuously and stores them safely off-node, ensuring they are available for debugging even after a Pod is gone."
  },
  {
    "id": 240,
    "domain": "Cloud Native Application Delivery",
    "question": "You deployed a Pod with a PersistentVolumeClaim (PVC), but the Pod is stuck in 'Pending' state. The event log says 'pod has unbound immediate PersistentVolumeClaims'. What should you check?",
    "options": [
      "A) Verify if a PersistentVolume (PV) exists that satisfies the size and StorageClass requested by the PVC.",
      "B) Check if the network policies are blocking the Pod from starting.",
      "C) Ensure the container image exposes the correct port.",
      "D) Verify that the Liveness probe is correctly configured."
    ],
    "correctAnswer": 0,
    "explanation": "If a PVC cannot be bound to a suitable PV (either statically provisioned or dynamically created via a StorageClass), it remains unbound. Any Pod referencing this PVC will not be scheduled and will stay in the Pending state."
  },
  {
    "id": 241,
    "domain": "Cloud Native Application Delivery",
    "question": "What information does the 'kubectl get events' command provide?",
    "options": [
      "A) A real-time stream of stdout logs from all pods in a namespace.",
      "B) A chronological list of cluster activities, such as scheduling decisions, pod creations, and errors.",
      "C) Network traffic statistics between nodes.",
      "D) Detailed source code stack traces for application crashes."
    ],
    "correctAnswer": 1,
    "explanation": "Kubernetes events are objects that provide insight into what is happening inside a cluster, such as what decisions the scheduler made, why pods were evicted, or if image pulls failed. 'kubectl get events' lists these activities."
  },
  {
    "id": 242,
    "domain": "Cloud Native Application Delivery",
    "question": "Which command would you use to quickly see the real-time CPU and memory usage of Pods in your namespace?",
    "options": [
      "A) kubectl get pod --show-metrics",
      "B) kubectl describe pod",
      "C) kubectl top pod",
      "D) kubectl logs --metrics"
    ],
    "correctAnswer": 2,
    "explanation": "Assuming the Metrics Server is installed in the cluster, 'kubectl top pod' displays the current CPU and memory consumption for running Pods. This is helpful for quick performance checks and debugging resource limits."
  },
  {
    "id": 243,
    "domain": "Cloud Native Application Delivery",
    "question": "When using the 'kubectl debug' command to troubleshoot a crashing node, what does the command actually do?",
    "options": [
      "A) It pauses the node and prevents further scheduling.",
      "B) It creates a privileged debugging Pod running on the specific node with access to the node's host namespaces.",
      "C) It automatically restarts the kubelet service on the node.",
      "D) It connects a local debugger (like GDB) over the network directly to the kubelet process."
    ],
    "correctAnswer": 1,
    "explanation": "When targeting a node, 'kubectl debug node/<node-name>' creates a special Pod that runs directly on the specified node. This pod is usually privileged and has access to the node's host filesystem and network namespaces, enabling deep troubleshooting of node-level issues."
  },
  {
    "id": 244,
    "domain": "Cloud Native Architecture",
    "question": "Which of the following are commonly referred to as the 'three pillars of observability' in cloud native systems?",
    "options": [
      "A) Monitoring, Alerting, and Dashboards",
      "B) Metrics, Logs, and Traces",
      "C) Availability, Reliability, and Scalability",
      "D) Events, Alerts, and Incidents"
    ],
    "correctAnswer": 1,
    "explanation": "Metrics, logs, and traces are widely recognized as the three fundamental pillars of observability. Together, they provide a comprehensive view of system health, allowing engineers to understand both what went wrong and why."
  },
  {
    "id": 245,
    "domain": "Cloud Native Architecture",
    "question": "In the context of site reliability engineering, what does SLI stand for?",
    "options": [
      "A) Service Level Indicator",
      "B) System Logging Interface",
      "C) Standard Logging Integration",
      "D) Service Latency Index"
    ],
    "correctAnswer": 0,
    "explanation": "SLI stands for Service Level Indicator. It is a carefully defined quantitative measure of some aspect of the level of service that is provided, such as latency or error rate."
  },
  {
    "id": 246,
    "domain": "Cloud Native Architecture",
    "question": "Which tool is commonly used in conjunction with Prometheus to create rich visual dashboards and graphs?",
    "options": [
      "A) Kibana",
      "B) Envoy",
      "C) Grafana",
      "D) Fluentd"
    ],
    "correctAnswer": 2,
    "explanation": "Grafana is a multi-platform open source analytics and interactive visualization web application. It is highly integrated with Prometheus to query, visualize, alert on, and understand metrics."
  },
  {
    "id": 247,
    "domain": "Cloud Native Architecture",
    "question": "In the EFK stack (commonly used for Kubernetes logging), what does the 'F' stand for?",
    "options": [
      "A) Flannel",
      "B) Fluentd",
      "C) Falco",
      "D) Fargate"
    ],
    "correctAnswer": 1,
    "explanation": "In the EFK stack, which is widely used for centralized logging in Kubernetes, the 'F' stands for Fluentd (or sometimes Fluent Bit). It collects, parses, and forwards logs to Elasticsearch."
  },
  {
    "id": 248,
    "domain": "Cloud Native Architecture",
    "question": "Which of the following is a key tenet of the Twelve-Factor App methodology?",
    "options": [
      "A) Storing application state in local memory to maximize performance.",
      "B) Hardcoding configuration values in the source code.",
      "C) Treating backing services (like databases) as attached resources.",
      "D) Using a single, monolithic codebase for all business capabilities."
    ],
    "correctAnswer": 2,
    "explanation": "The Twelve-Factor App methodology states that backing services should be treated as attached resources, meaning they can be swapped out without making code changes. Configuration should be in the environment, and processes should be stateless."
  },
  {
    "id": 249,
    "domain": "Cloud Native Architecture",
    "question": "Which technology allows developers to run code in response to events without managing the underlying servers?",
    "options": [
      "A) Virtual Machines",
      "B) Serverless (Function-as-a-Service)",
      "C) Service Mesh",
      "D) StatefulSets"
    ],
    "correctAnswer": 1,
    "explanation": "Serverless, or FaaS (Function-as-a-Service), allows developers to write and deploy code that automatically scales and runs in response to events, abstracting away all server management."
  },
  {
    "id": 250,
    "domain": "Cloud Native Architecture",
    "question": "Which CNCF project is a high-performance edge/middle/service proxy often used as the data plane in a service mesh?",
    "options": [
      "A) Envoy",
      "B) Helm",
      "C) Prometheus",
      "D) Rook"
    ],
    "correctAnswer": 0,
    "explanation": "Envoy is an open-source edge and service proxy designed for cloud-native applications. It is frequently used as the data plane proxy in service meshes like Istio."
  },
  {
    "id": 251,
    "domain": "Cloud Native Architecture",
    "question": "What characterizes a microservices architecture compared to a monolithic architecture?",
    "options": [
      "A) All application code is compiled into a single executable binary.",
      "B) The application uses a single, shared relational database for all state.",
      "C) The application is composed of small, independently deployable services that communicate over APIs.",
      "D) Deployments require coordinating downtime across all teams simultaneously."
    ],
    "correctAnswer": 2,
    "explanation": "Microservices architectures break down applications into small, independently scalable and deployable services that are loosely coupled, communicating via lightweight protocols like HTTP/REST or gRPC."
  },
  {
    "id": 252,
    "domain": "Cloud Native Architecture",
    "question": "Why is API Gateway an important architectural pattern in cloud native systems?",
    "options": [
      "A) It replaces the need for a load balancer at the network layer.",
      "B) It acts as a single entry point for external traffic, providing routing, rate limiting, and authentication.",
      "C) It encrypts all node-to-node communication within the cluster.",
      "D) It provides a central repository for container images."
    ],
    "correctAnswer": 1,
    "explanation": "An API Gateway serves as the single point of entry into a microservices architecture. It abstracts the internal microservices from clients and handles cross-cutting concerns like authentication, SSL termination, and rate limiting."
  },
  {
    "id": 253,
    "domain": "Cloud Native Architecture",
    "question": "Which term describes the ability of a system to continue functioning, perhaps at a reduced level, rather than failing completely when a component fails?",
    "options": [
      "A) Scalability",
      "B) Fault tolerance",
      "C) Consistency",
      "D) Observability"
    ],
    "correctAnswer": 1,
    "explanation": "Fault tolerance is the property that enables a system to continue operating properly in the event of the failure of some of its components. This is a critical design principle in cloud native architectures."
  },
  {
    "id": 254,
    "domain": "Cloud Native Architecture",
    "question": "In the Kubernetes community, what does 'SIG' stand for?",
    "options": [
      "A) System Infrastructure Group",
      "B) Standard Integration Gateway",
      "C) Special Interest Group",
      "D) Security Information Gathering"
    ],
    "correctAnswer": 2,
    "explanation": "A Special Interest Group (SIG) in the Kubernetes community focuses on a specific part of the project (e.g., SIG-Networking, SIG-Storage). They manage the development and maintenance of their respective areas."
  },
  {
    "id": 255,
    "domain": "Cloud Native Architecture",
    "question": "Which of the following is an example of a managed Kubernetes service offered by a major cloud provider?",
    "options": [
      "A) Kubeadm",
      "B) Minikube",
      "C) Amazon EKS (Elastic Kubernetes Service)",
      "D) Kind (Kubernetes in Docker)"
    ],
    "correctAnswer": 2,
    "explanation": "Amazon EKS, Google GKE, and Azure AKS are all examples of managed Kubernetes services where the cloud provider manages the Kubernetes control plane, simplifying cluster administration."
  },
  {
    "id": 256,
    "domain": "Cloud Native Architecture",
    "question": "Which of the following CNCF certifications is specifically aimed at demonstrating foundational knowledge of cloud native technologies?",
    "options": [
      "A) CKA (Certified Kubernetes Administrator)",
      "B) CKS (Certified Kubernetes Security Specialist)",
      "C) KCNA (Kubernetes and Cloud Native Associate)",
      "D) CKAD (Certified Kubernetes Application Developer)"
    ],
    "correctAnswer": 2,
    "explanation": "The KCNA is a multiple-choice exam that validates foundational knowledge of Kubernetes and the broader cloud native ecosystem. CKA, CKAD, and CKS are more advanced, performance-based exams."
  },
  {
    "id": 257,
    "domain": "Cloud Native Architecture",
    "question": "What is the recommended approach for individuals looking to contribute to open source CNCF projects?",
    "options": [
      "A) Pay a membership fee to gain contribution rights.",
      "B) Rewrite major portions of the code without discussing it to prove competence.",
      "C) Start by reading the contributing guidelines (CONTRIBUTING.md) and tackling 'good first issues'.",
      "D) Wait for a formal invitation from the project maintainers."
    ],
    "correctAnswer": 2,
    "explanation": "The best way to start contributing to open source CNCF projects is to read the project's contribution guidelines, join the community channels (like Slack), and look for issues labeled 'good first issue' or 'help wanted'."
  },
  {
    "id": 258,
    "domain": "Cloud Native Architecture",
    "question": "Approximately how often does the Kubernetes project release a new minor version (e.g., from 1.28 to 1.29)?",
    "options": [
      "A) Every 3 months (4 times a year)",
      "B) Every 4 months (3 times a year)",
      "C) Every 6 months (2 times a year)",
      "D) Every year (1 time a year)"
    ],
    "correctAnswer": 1,
    "explanation": "Since Kubernetes 1.22, the release cadence has shifted to three releases a year (roughly every 15 weeks), allowing for more stabilization time between minor version upgrades."
  }
];
