/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
// https://github.com/rancher/ui/blob/master/lib/shared/addon/mixins/cluster-driver.js
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed     = Ember.computed;
const equal        = Ember.computed.equal;
const observer     = Ember.observer;
const get          = Ember.get;
const set          = Ember.set;
const setProperties= Ember.setProperties;
const alias        = Ember.computed.alias;
const service      = Ember.inject.service;
const all          = Ember.RSVP.all;
const next         = Ember.run.next;

/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/
const canonicalHeaders = ['host', 'content-length', 'content-type', 'content-md5'];
const expirationPeriodInSeconds = 1800;
const bccHostMap = {
  'bj':  'bcc.bj.baidubce.com',
  'gz':  'bcc.gz.baidubce.com',
  'su':  'bcc.su.baidubce.com',
  'hkg': 'bcc.hkg.baidubce.com',
  'fwh': 'bcc.fwh.baidubce.com',
  'bd':  'bcc.bd.baidubce.com',
};
const cceHostMap = {
  'bj':  'cce.bj.baidubce.com',
  'gz':  'cce.gz.baidubce.com',
  'su':  'cce.su.baidubce.com',
  'hkg': 'cce.hkg.baidubce.com',
  'fwh': 'cce.fwh.baidubce.com',
  'bd':  'cce.bd.baidubce.com',
};
const regionMap = {
  bj:  '华北-北京',
  bd:  '华北-保定',
  gz:  '华南-广州',
  su:  '华东-苏州',
  fwh: '金融华中-武汉',
  hkg: '香港',
}
const bandWidthOptions = [
  {
    label: 'clusterNew.baiducce.bandwidthType.bandwidth',
    value: 'bandwidth',
    defaultValue: 1,
  },
  {
    label: 'clusterNew.baiducce.bandwidthType.traffic',
    value: 'netraffic',
    defaultValue: 1000,
  }
];

const buyEipOptions = [
  {
    label: 'clusterNew.baiducce.eip.buyEip',
    value: true,
  },
  {
    label: 'clusterNew.baiducce.eip.noEip',
    value: false,
  }
];
const supportedInstances = [
  { alias: 'DEFAULT', text: '普通型', value: 0 },
  { alias: 'DEFAULTII', text: '普通型II', value: 7 },
  { alias: 'DEFAULTIII', text: '普通型III', value: 10 },
  { alias: 'GPU', text: 'GPU实例', value: 9 },
];
const languages = {
  'en-us':   {"clusterNew":{"baiducce":{"access":{"next":"Next: Configure Cluster","loading":"Loading VPCs from Baidu Cloud","title":"Account Access","detail":"Choose the region and API Key that will be used to launch Baidu Kubernetes Service"},"region":{"label":"Region"},"accessKey":{"label":"Secret ID","placeholder":"Your Baidu Cloud secret id","required":"Secret ID is required"},"secretKey":{"label":"Secret Key","placeholder":"Your Baidu Cloud secret key","provided":"Provided","required":"Secret Key is required"},"cluster":{"title":"Cluster Configuration","detail":"Choose the VPC and Kubernetes version that will be used to launch Baidu Kubernetes Service","next":"Next: Select Instance Type","loading":"Loading Availability Zones from Baidu Cloud"},"vpc":{"label":"VPC","required":"VPC is required"},"version":{"label":"Kubernetes Version","required":"Kubernetes Version is required"},"cidr":{"label":"Container Network CIDR","placeholder":"e.g. 172.16.0.0/16","required":"Container network CIDR is required","error":"Container network CIDR format error","errorConflict":"ContainerNet conflict with existing one"},"zone":{"label":"Availability Zone","required":"Availability Zone is required"},"nodeCount":{"label":"Node Count","placeholder":"e.g. 3","required":"Node Count is required","help":"The count of nodes will be launched in this Kubernetes cluster","error":"The count of nodes should not be greater than {max}"},"instanceType":{"label":"Instance Type","required":"Instance Type is required"},"instanceConfig":{"label":"Instance Configuration(CPU/Memory)","gpuLabel":"Instance Configuration(CPU/Memory/GPU Type/GPU Count)","required":"Instance Configuration is required"},"subnet":{"label":"Subnet","required":"Subnet is required"},"node":{"title":"Node Type","detail":"Choose the node type that will be used to launch Baidu Kubernetes Service","next":"Next: Configure Instance","loading":"Loading configuration from Baidu Cloud"},"instance":{"title":"Instance Configuration","detail":"Configure the instance that will be used to launch Tencent Baidu Service"},"os":{"label":"Operating System"},"rootSize":{"label":"Root Disk Type","placeholder":"Free Gift - 40GB for Linux"},"storageType":{"label":"CDS Disk Type"},"storageSize":{"label":"CDS Disk Size","placeholder":"e.g. 10","error":"CDS Disk Size should be greater than 0 and less than 5120 and multiple of 5"},"eip":{"label":"Public Network IP","buyEip":"Purchasing Flexible Public Network IP","noEip":"No","name":"Name","placeholder":"Public Network IP Name"},"bandwidth":{"label":"Band Width","placeholder":"e.g. 10","required":"Band Width is required","error":"Band Width value should be integers between 1 to {max}"},"securityGroup":{"label":"Security Group","required":"Security Group is required"},"bandwidthType":{"label":"Band Width Type","bandwidth":"Pay By band width","traffic":"Pay By Traffic"}}}},
  'zh-hans': {"clusterNew":{"baiducce":{"access":{"next":"下一步: 配置集群","loading":"从百度云获取VPC信息","title":"账户认证","detail":"选择百度云Kubernetes服务所使用的区域"},"region":{"label":"区域"},"accessKey":{"label":"密钥ID","placeholder":"您的百度云API密钥ID","required":"请输入密钥ID"},"secretKey":{"label":"密钥","placeholder":"您的百度云API密钥","provided":"已提供","required":"请输入密钥"},"cluster":{"title":"集群配置","detail":"选择百度云Kubernetes服务中使用的VPC和版本","next":"下一步: 选择主机类型","loading":"从百度云获取可用区信息"},"vpc":{"label":"VPC","required":"请选择VPC"},"version":{"label":"Kubernetes版本","required":"请选择Kubernetes版本"},"cidr":{"label":"容器网络CIDR","placeholder":"例如: 172.16.0.0/16","required":"请输入容器网络的CIDR","error":"CIDR格式错误","errorConflict":"容器网络和其他集群的容器网络冲突"},"zone":{"label":"可用区","required":"请选择可用区"},"nodeCount":{"label":"节点数量","placeholder":"例如: 3","required":"请输入节点数量","help":"将要创建的百度云Kubernetes服务中所含有的节点数量","error":"节点数不能超过{max}"},"instanceType":{"label":"实例类型","required":"请选择实例类型"},"instanceConfig":{"label":"实例配置(CPU/Memory)","gpuLabel":"实例配置(CPU/Memory/GPU Type/GPU Count)","required":"请选择实例配置"},"subnet":{"label":"子网","required":"请选择子网"},"node":{"title":"主机类型","detail":"选择百度云Kubernetes服务中使用的主机类型","next":"下一步: 配置节点","loading":"从百度云获取节点配置信息"},"instance":{"title":"节点配置","detail":"配置百度云Kubernetes服务中的节点"},"os":{"label":"操作系统"},"rootSize":{"label":"系统盘","placeholder":"免费赠送 - Linux送40GB"},"storageType":{"label":"CDS云磁盘类型"},"storageSize":{"label":"CDS云磁盘大小","placeholder":"例如: 10","error":"CDS云磁盘大小应该在大于0且小于5120之间且是5的倍数"},"eip":{"label":"公网IP","buyEip":"购买弹性公网IP","noEip":"暂不需要","name":"名称","placeholder":"公网IP名称"},"bandwidth":{"label":"带宽","placeholder":"例如: 10","required":"请输入带宽","error":"带宽值应该是1到{max}之前的整数"},"securityGroup":{"label":"安全组","required":"请选择安全组"},"bandwidthType":{"label":"带宽类型","bandwidth":"按带宽计费","traffic":"按流量计费"}}}}
};

/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(ClusterDriver, {
  driverName:  '%%DRIVERNAME%%',
  configField: '%%DRIVERNAME%%EngineConfig', // 'googleKubernetesEngineConfig'
  app:         service(),
  router:      service(),
  session:     service(),
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
  intl:              service(),
  layout:            null,
  configField:       'baiduEngineConfig',
  versionChoices:    [],
  subnetChoices:     [],
  zoneChoices:       [],
  vpcChoices:        [],
  sgChoices:         [],
  clusterQuota:      null,
  snapshotChoices:   [],
  imageChioces:      [],
  allImages:         [],
  zoneResource:      null,
  cdsConfig:         {
    type:  '',
    value: 0,
  },
  instanceConfig: '',
  step:               1,
  isNew:              equal('mode', 'new'),
  editing:            equal('mode', 'edit'),
  lanChanged:         null,
  refresh:            false,
  init() {
    /*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template      = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template'
    });
    set(this,'layout', template);
    this._super(...arguments);
    /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
    const lang = get(this, 'session.language');
    get(this, 'intl.locale');
    this.loadLanguage(lang);
    let config      = get(this, 'config');
    let configField = get(this, 'configField');


    if ( !config ) {
      config = this.get('globalStore').createRecord({
        type:               configField,
        accessKey:         '',
        secretKey:         '',
        clusterName:       '',
        zone:              '',
        containerCidr:     '172.16.0.0/16',
        clusterVersion:    '',
        region:            'bj',
        securityGroupId:   '',
        imageId:           '',
        adminPass:         '',
        adminPassConfirm:  '',
        subnetId:          '',
        cpu:               0,
        memory:            0,
        nodeCount:         2,
        subProductType:    'netraffic',
        ifBuyEip:          true,
        eipName:           '',
        bandwidthInMbps:   1000,
        cdsConfig:         [],
        gpuCard:           '',
        gpuCount:          0,
      });

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', config);
    }
    // init cdsConfig
    const [cdsConfig] = get(this, 'config.cdsConfig') || [];

    if (cdsConfig) {
      const cds = cdsConfig.split(':');

      set(this, 'cdsConfig', {
        type:  cds[0].toUpperCase(),
        value: cds[1],
      });
    } else {
      set(this, 'cdsConfig', {
        type:  '',
        value: '',
      });
    }
    // init cpu and memory
    const { cpu, memory } = get(this, 'config');

    if (cpu && memory) {
      set(this, 'instanceConfig', `${ get(this, 'config.cpu') }/${ get(this, 'config.memory') }`);
    }
  },

  config: alias('cluster.%%DRIVERNAME%%EngineConfig'),


  actions: {
    baiduLogin(cb) {
      setProperties(this, {
        'errors':           null,
        'config.accessKey':  (get(this, 'config.accessKey') || '').trim(),
        'config.secretKey': (get(this, 'config.secretKey') || '').trim(),
      });
      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const accessKey = get(this, 'config.accessKey');
      const secretKey = get(this, 'config.secretKey');
      const region = get(this, 'config.region');

      if ( !accessKey ) {
        errors.push(intl.t('clusterNew.baiducce.accessKey.required'));
      }

      if ( !secretKey ) {
        errors.push(intl.t('clusterNew.baiducce.secretKey.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      return all([
        this.loadSuportK8sVersion(region),
        this.loadVpcs(region),
        this.loadClusterQuota(region),
      ]).then(() => {
        set(this, 'step', 2);
        cb(true);
      }).catch((err) => {
        if (err.status === 502) {
          errors.push('请求失败, 请确认是否设置白名单');
        } else {
          errors.push(err && err.body && err.body.message);
        }
        set(this, 'errors', errors);
        cb(false);
      });
    },
    loadNodeConfig(cb) {
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const {
        region, vpcId, nodeCount, clusterVersion
      } = get(this, 'config');

      if ( !vpcId ) {
        errors.push(intl.t('clusterNew.baiducce.vpc.required'));
      }

      if ( !nodeCount ) {
        errors.push(intl.t('clusterNew.baiducce.nodeCount.required'));
      } else {
        const maxNodeCount = get(this, 'maxNodeCount');

        if (!/^\d+$/.test(nodeCount) || parseInt(nodeCount, 10) < 0 || parseInt(nodeCount, 10) > maxNodeCount) {
          errors.push(intl.t('clusterNew.baiducce.nodeCount.error', { max: maxNodeCount }));
        }
      }
      
      if (!clusterVersion) {
        errors.push(intl.t('clusterNew.baiducce.version.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      return all([
        this.loadZoneResources(region)
      ]).then(() => {
        set(this, 'step', 3);
        cb(true);
      }).catch((err) => {
        errors.push(err && err.body && err.body.message);
        set(this, 'errors', errors);
        cb(false);
      });
    },
    loadInstanceConfig(cb) {
      set(this, 'errors', null);

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const {
        zone, subnetId, region, vpcId, instanceType, containerCidr
      } = get(this, 'config');

      const cidrIPV4RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/\d{1,2}$/;

      if ( !zone ) {
        errors.push(intl.t('clusterNew.baiducce.zone.required'));
      }

      if ( !subnetId ) {
        errors.push(intl.t('clusterNew.baiducce.subnet.required'));
      }
      const instanceTypeChoices = get(this, 'instanceTypeChoices') || [];
      if ( !/^\d+$/.test(instanceType) || !instanceTypeChoices.find((t) => t.value === instanceType)) {
        errors.push(intl.t('clusterNew.baiducce.instanceType.required'));
      }

      if (!cidrIPV4RegExp.test(containerCidr)) {
        errors.push(intl.t('clusterNew.baiducce.cidr.error'));
      }

      const instanceConfig = get(this, 'instanceConfig') || '';
      const instanceConfigChoices = get(this, 'instanceConfigChoices') || [];
      const [cpu, memory, gpuType, gpuCount] = instanceConfig.split('/');

      if (!instanceConfigChoices.find((c) => c.value === instanceConfig) || (cpu && parseInt(cpu, 10) > 0 && memory && parseInt(memory, 10) > 0)) {
        const instanceConfig = {
          'config.cpu':    parseInt(cpu, 10),
          'config.memory': parseInt(memory, 10)
        };
        if (instanceType === 9) {
          instanceConfig.gpuCard = parseInt(gpuType, 10);
          instanceConfig.gpuCount = parseInt(gpuCount, 10);
        }
        setProperties(this, instanceConfig);
      } else {
        errors.push(intl.t('clusterNew.baiducce.instanceConfig.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      if (get(this, 'isNew')) {
        const vpcCidr = get(this, 'vpcChoices').find((vpc) => vpc.value === vpcId).raw.cidr;

        return this.checkContainerNet(region, vpcId, vpcCidr, containerCidr).then((resp) => {
          if (resp.body && resp.body.code === 'Cce.ContainerNetConflictCluster') {
            errors.push(intl.t('clusterNew.baiducce.cidr.errorConflict'));
            cb(false);

            return;
          }

          return all([
            this.loadImages(region),
            this.loadSecurityGroups(region, vpcId),
          ]).then(() => {
            set(this, 'step', 4);
            cb(true);
          }).catch(() => {
            cb(false);
          });
        }).catch((err) => {
          if (err && err.body && err.body.code === 'Cce.ContainerNetConflictCluster') {
            errors.push(intl.t('clusterNew.baiducce.cidr.errorConflict'));
          } else {
            errors.push(err && err.body && err.body.message);
          }
          set(this, 'errors', errors);
          cb(false);
        });
      }

      return all([
        this.loadSecurityGroups(region, vpcId),
      ]).then(() => {
        set(this, 'step', 4);
        cb(true);
      }).catch((err) => {
        errors.push(err && err.body && err.body.message);
        set(this, 'errors', errors);
        cb(false);
      });
    },
    save(cb) {
      setProperties(this, { 
        'errors': null,
        'otherErrors': null,
        'clusterErrors': null,
     });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const { securityGroupId, bandwidthInMbps } = get(this, 'config') ;
      const { type, value } = get(this, 'cdsConfig');

      if ( !securityGroupId ) {
        errors.push(intl.t('clusterNew.baiducce.securityGroup.required'));
      }

      if (!/^\d+$/.test(bandwidthInMbps) || parseInt(bandwidthInMbps, 10) > get(this, 'maxBandWidth') || parseInt(bandwidthInMbps, 10) < 1 ) {
        errors.push(intl.t('clusterNew.baiducce.bandwidth.error', { max: get(this, 'maxBandWidth') }));
      }

      if (type && (!/^\d+$/.test(value) || parseInt(value, 10) <= 0 || parseInt(value, 10) > 5120 || parseInt(value, 10) % 5 !== 0)) {
        errors.push(intl.t('clusterNew.baiducce.storageSize.error'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb(false);

        return;
      }
      if (!this.validate()) {
        cb(false);
        return;
      }
      const pwd = this.genPw();

      set(this, 'config.adminPass', pwd);
      set(this, 'config.adminPassConfirm', pwd);

      

      if (type && value) {
        set(this, 'config.cdsConfig', [`${ type.toLowerCase() }:${ value }`]);
      }  else {
        set(this, 'config.cdsConfig', []);
      }
      
      this.send('driverSave', cb);
    },
    cancel(){
      // probably should not remove this as its what every other driver uses to get back
      get(this, 'router').transitionTo('global-admin.clusters.index');
    },
    cpuAndMemoryChanged(item) {
      setProperties(this, {
        'config.cpu':    item.raw.cpuCount,
        'config.memory': item.raw.memoryCapacityInGB
      });
    }
  },

  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = get(this, 'errors')||[];
    if ( !get(this, 'cluster.name') ) {
      errors.push('Name is required');
    }

    // Add more specific errors

    // Check something and add an error entry if it fails:
    // if ( parseInt(get(this, 'config.memorySize'), defaultRadix) < defaultBase ) {
    //   errors.push('Memory Size must be at least 1024 MB');
    // }

    // Set the array of errors for display,
    // and return true if saving should continue.
    if ( get(errors, 'length') ) {
      set(this, 'errors', errors);
      return false;
    } else {
      set(this, 'errors', null);
      return true;
    }
  },

  // Any computed properties or custom logic can go here
  languageDidChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');
    if (lang) {
      this.loadLanguage(lang[0]);
    }
    
  }),
  accessTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.access.title');
  }),
  accessDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.access.detail');
  }),
  clusterTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.cluster.title');
  }),
  clusterDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.cluster.detail');
  }),
  nodeTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.node.title');
  }),
  nodeDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.node.detail');
  }),
  instanceTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.instance.title');
  }),
  instanceDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.baiducce.instance.detail');
  }),
  maxNodeCount: computed('clusterQuota.slave', function() {
    const { slave = 0 } = get(this, 'clusterQuota');

    return slave;
  }),
  bandWidthChoices: computed('intl.locale', function() {
    const intl = get(this, 'intl');
    return bandWidthOptions.map((item) => ({
      ...item,
      label: intl.t(item.label),
    }));
  }),
  buyEipChoices: computed('intl.locale', function() {
    const intl = get(this, 'intl');
    return buyEipOptions.map((item) => ({
      ...item,
      label: intl.t(item.label),
    }));
  }),
  loadLanguage(lang) {
    const translation = languages[lang] || languages['en-us'];
    const intl = get(this, 'intl');
    intl.addTranslation(lang, 'clusterNew.baiducce', translation.clusterNew.baiducce);
    intl.translationsFor(lang);
    set(this, 'refresh', false);
    next(() => {
      set(this, 'refresh', true);
      set(this, 'lanChanged', +new Date());
    });
  },

  zoneDidChanged: observer('config.region', 'config.zone', 'config.vpcId', 'instanceTypeChoices', function() {
    const region = get(this, 'config.region');
    const zone = get(this, 'config.zone');
    const vpcId = get(this, 'config.vpcId');
    const zoneChoices = get(this, 'zoneChoices') || [];
    const foundZone = zoneChoices.find((z) => z.value === zone);

    if (region && zone && foundZone && vpcId) {
      this.loadSubnets(region, vpcId, `cn-${ region }-${ foundZone.value.substr(4).toLowerCase() }`);
    }
    const instanceType = get(this, 'config.instanceType');
    const instanceTypeChoices = get(this, 'instanceTypeChoices');

    if (instanceTypeChoices.length) {
      const found = instanceTypeChoices.find((it) => it.value === instanceType);

      if (!found) {
        set(this, 'config.instanceType', null);
      }
    }
  }),
  vpcDidChanged: observer('config.region', 'config.vpcId', function() {
    const region = get(this, 'region');
    const vpcId = get(this, 'config.vpcId');

    if (region && vpcId) {
      this.loadSecurityGroups(region, vpcId);
    }
  }),
  clusterNameDidChange: observer('cluster.name', function() {
    const clusterName = get(this, 'cluster.name');

    set(this, 'config.clusterName', clusterName);
    set(this, 'config.eipName', clusterName);
  }),
  cdsConfigDidChanged: observer('config.cdsConfig', 'cdsTypeChoices', function() {
    const [cdsConfig] = get(this, 'config.cdsConfig') || [];
    const cdsTypeChoices = get(this, 'cdsTypeChoices') || [];
    if (!cdsConfig) {
      setProperties(this, {
        'cdsConfig.type': '',
        'cdsConfig.value': '',
      });
      return;
    }
    if (get(this, 'cdsTypeChoices.length') === 0) {
      return;
    }
    const type = cdsConfig.split(':')[0];
    const found = cdsTypeChoices.find((item) => item.value === type);
    if (!found) {
      set(this, 'cdsConfig.type', '');
    }
  }),
  cpuOrMemoryDidChanged: observer('config.cpu', 'config.memory', 'instanceConfigChoices', 'instanceTypeChoices', function() {
    const instanceConfig = get(this, 'instanceConfig');
    const instanceConfigChoices = get(this, 'instanceConfigChoices') || [];
    const found = instanceConfigChoices.find((item) => item.value === instanceConfig);
    if (!found && instanceConfigChoices.length > 0) {
      set(this, 'instanceConfig', instanceConfigChoices[0].value);
    }
  }),
  instanceTypeChoicesDidChanged: observer('instanceTypeChoices', function() {
    const instanceTypeChoices = get(this, 'instanceTypeChoices') || [];
    const instanceType = get(this, 'config.instanceType');
    const found = instanceTypeChoices.find((t) => t.value === instanceType);

    if (!found && instanceTypeChoices.length > 0) {
      set(this, 'config.instanceType', instanceTypeChoices[0].value);
    }
  }),
  subProductTypeDidChanged: observer('config.subProductType', function() {
    const type = get(this, 'config.subProductType');
    const bandWidthChoices = get(this, 'bandWidthChoices');
    set(this, 'config.bandwidthInMbps', bandWidthChoices.find((bw) => bw.value === type).defaultValue);
  }),
  regionChoices: Object.entries(regionMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectedRegion: computed('config.region', function() {
    const region = get(this, 'config.region');

    return region && regionMap[region];
  }),
  selectedVpc: computed('config.vpcId', function() {
    const vpcId = get(this, 'config.vpcId');
    const vpcChoices = get(this, 'vpcChoices') || [];
    const found = vpcChoices.find((vpc) => vpc.value === vpcId );

    return found && found.label;
  }),
  selectedSubnet: computed('config.subnetId', 'subnetChoices', function() {
    const subnetId = get(this, 'config.subnetId');
    const subnetChoices = get(this, 'subnetChoices') || [];
    const found = subnetChoices.find((subnet) => subnet.value === subnetId);

    return found && found.label;
  }),
  selectedSecurityGroup: computed('config.subnetId', function() {
    const securityGroupId = get(this, 'config.securityGroupId');
    const sgChoices = get(this, 'sgChoices') || [];
    const found = sgChoices.find((sg) => sg.value === securityGroupId);

    return found && found.label;
  }),
  selectedBandWidthBillingMethod: computed('config.subProductType', 'bandWidthChoices', function() {
    const intl = get(this, 'intl');
    const m = get(this, 'config.subProductType');
    const bandWidthChoices = get(this, 'bandWidthChoices') || [];
    const found = bandWidthChoices.find((bw) => bw.value === m);

    return found && intl.t(found.label);
  }),
  selectedImage: computed('config.imageId', function() {
    const imageId = get(this, 'config.imageId');
    const imageChioces = get(this, 'imageChioces');
    const found = imageChioces.find((image) => image.value === imageId);

    return found && found.label;
  }),
  selecteInstanceType: computed('config.instanceType', 'config.zone', function() {
    const instanceType = get(this, 'config.instanceType');
    const zone = get(this, 'config.zone');
    const instanceTypeChoices = get(this, 'instanceTypeChoices') || [];
    const found = instanceTypeChoices.find((it) => it.value === instanceType && it.zone === zone);

    return found && found.label;
  }),
  selectedCpuAndMemory: computed('instanceConfig', function() {
    const cm = get(this, 'instanceConfig');
    const choices = get(this, 'instanceConfigChoices') || [];
    const found = choices.find((item) => item.value === cm);

    return found && found.label;
  }),
  maxBandWidth: computed('config.subProductType', function() {
    const t = get(this, 'config.subProductType');

    return t === 'netraffic' ? 1000 : 200;
  }),
  instanceTypeChoices: computed('config.zone', 'zoneResources', function() {
    const zoneResources = get(this, 'zoneResources') || [];
    const zone = get(this, 'config.zone');
    const found = zoneResources.find((r) => r.physicalZone === zone);

    if (!found) {
      return [];
    }

    return found.bccResources.filter((r) => r.status === 'available' && supportedInstances.findIndex((f) => f.value === r.indexValue) > -1 ).map((r) => ({
      label:   `${ r.serverType }:${ supportedInstances.find((f) => f.value === r.indexValue).text }`,
      value:   r.indexValue,
      flavors: r.flavors,
      zone:    found.physicalZone
    }));
  }),
  instanceConfigChoices: computed('config.instanceType', 'config.zone', 'instanceTypeChoices', function() {
    const instanceType = get(this, 'config.instanceType');
    const zone = get(this, 'config.zone');
    const instanceTypeChoices = get(this, 'instanceTypeChoices') || [];

    const found = instanceTypeChoices.find((it) => it.value === instanceType && it.zone === zone);

    if (!found) {
      return [];
    }
    const supportedFlavors = found.flavors.filter((f) => f.cpuCount >= 4 && f.memoryCapacityInGB >= 8);
    if (instanceType === 9) {
      return supportedFlavors.map((f) => ({
        label: `${ f.cpuCount } Core / ${ f.memoryCapacityInGB } GB / ${ f.gpuCardType } / ${f.gpuCardCount}`,
        value: `${ f.cpuCount }/${ f.memoryCapacityInGB }/${ f.gpuCardType }/${f.gpuCardCount}`,
        raw:    f
      }));
    }
    return supportedFlavors.map((f) => ({
      label: `${ f.cpuCount } Core / ${ f.memoryCapacityInGB } GB`,
      value: `${ f.cpuCount }/${ f.memoryCapacityInGB }`,
      raw:    f
    }));
  }),
  cdsTypeChoices: computed('config.zone', 'zoneResources', function() {
    const zoneResources = get(this, 'zoneResources') || [];
    const zone = get(this, 'config.zone');

    const found = zoneResources.find((r) => r.physicalZone === zone);

    if (!found) {
      return [{
        label: 'None',
        value: ''
      }];
    }

    return [{
      label: 'None',
      value: ''
    }, ...found.cdsResources.filter((cds) => cds.status === 'available').map((cds) => ({
      label: cds.storageType,
      value: cds.storageType
    }))];
  }),
  isGPU: computed('config.instanceType', function() {
    return get(this, 'config.instanceType') === 9;
  }),
  loadClusterQuota(region) {
    const endpoint = '/v1/cluster';
    const host = cceHostMap[region];
    const params = { quota: '' };

    return this.apiRequest('GET', host, endpoint, params).then((resp) => {
      set(this, 'clusterQuota', resp.body);

      return resp.body;
    });
  },
  loadZoneResources(region) {
    const endpoint = '/v1/node/flavor/list';
    const host = cceHostMap[region];
    const data = { productType: 'postpay' };

    return this.apiRequest('POST', host, endpoint, {}, data).then((resp) => {
      const prop = {};
      const zoneResources = resp.body.zoneResources;

      prop.zoneResources = zoneResources;
      const zones = zoneResources.map((zr) => ({
        label:       zr.physicalZone,
        value:       zr.physicalZone,
        defaultZone: zr.defaultZone,
      }));

      prop.zoneChoices = zones;

      if (!get(this, 'config.zone') && zones.length > 0) {
        const zone = zones.find((z) => z.defaultZone === true) || zones[0];

        prop['config.zone'] = zone.value;
      }
      setProperties(this, prop);

      return zoneResources;
    });
  },
  loadSuportK8sVersion(region) {
    const endpoint = '/v1/cluster/versions';
    const host = cceHostMap[region];

    return this.apiRequest('GET', host, endpoint).then((resp) => {
      return resp.body.data;
    }).then((data) => {
      set(this, 'versionChoices', data.map((d) => ({
        label: d,
        value: d,
      })));
      const clusterVersion = get(this, 'config.clusterVersion');

      if (!clusterVersion && get(this, 'versionChoices.length')) {
        set(this, 'config.clusterVersion', get(this, 'versionChoices.firstObject.value'));
      }

      return data;
    });
  },
  loadSecurityGroups(region, vpcId) {
    const endpoint = '/v2/securityGroup';
    const host = bccHostMap[region];
    const params = { vpcId };

    return this.apiRequest('GET', host, endpoint, params).then((resp) => {
      return resp.body.securityGroups.map((sg) => ({
        label: sg.name,
        value: sg.id,
        raw:   sg,
      }));
    }).then((sgs) => {
      set(this, 'sgChoices', sgs);
      if (!get(this, 'config.securityGroupId') && get(this, 'sgChoices.length')) {
        set(this, 'config.securityGroupId', get(this, 'sgChoices.firstObject.value'));
      }
    });
  },
  loadImages(region) {
    const endpoint = '/v2/image';
    const host = bccHostMap[region];
    const paramsSystem = { imageType: 'System' };
    const paramsGpuSystem = { imageType: 'GpuBccSystem' };
    const paramsGpuSystemCustom = { imageType: 'GpuBccCustom' };
    const imageFilter = (image) => {
      const osNames = ['Ubuntu', 'CentOS'];
      if (osNames.indexOf(image.osName) < 0) {
        return false;
      }
      if (image.osName === 'Ubuntu') {
        return image.name.startsWith('16.04 LTS amd64 (64bit)');
      } else if (image.osName === 'CentOS') {
        const v = parseFloat(image.osVersion, 10)

        return v > 7 && v !== 7.4 && v !== 7.5;
      }

      return false;
    };
    const gpuImageFilter = (image) => {
      return image.name.indexOf('CUDA8.0 ') > -1 || image.name.indexOf('CUDA9.2 ') > -1;
    };

    return Promise.all([
      this.apiRequest('GET', host, endpoint, paramsSystem).then((resp) => {
        // const osNames = ['Ubuntu', 'CentOS'];
        // const images = resp.body.images.filter((image) => osNames.indexOf(image.osName) > -1 ).filter((image) => {
        //   if (image.osName === 'Ubuntu') {
        //     return image.name.startsWith('16.04 LTS amd64 (64bit)');
        //   } else if (image.osName === 'CentOS') {
        //     const v = parseFloat(image.osVersion, 10)

        //     return v > 7 && v !== 7.4 && v !== 7.5;
        //   }

        //   return false;
        // });
        const images = resp.body.images.filter(imageFilter);
        return images;
      }),
      this.apiRequest('GET', host, endpoint, paramsGpuSystem).then((resp) => {
        const images = resp.body.images.filter(imageFilter).filter(gpuImageFilter);

        return images;
      }),
      this.apiRequest('GET', host, endpoint, paramsGpuSystemCustom).then((resp) => {
        const images = resp.body.images.filter(imageFilter).filter(gpuImageFilter);

        return images;
      })
    ]).then(([images, gpuImages, gpuCustomImages]) => {
      const allImages = [...images, ...gpuImages, ...gpuCustomImages].map((image) => ({
        label: `${ image.osName } ${ image.name }`,
        value: image.id,
      }));

      set(this, 'allImages', allImages);

      const instanceType = get(this, 'config.instanceType');

      if (instanceType === 9) { // GPU instance
        set(this, 'imageChioces', [...gpuImages, ...gpuCustomImages].map((image) => ({
          label: `${ image.osName } ${ image.name }`,
          value: image.id,
        })));
      } else {
        set(this, 'imageChioces', [...images].map((image) => ({
          label: `${ image.osName } ${ image.name }`,
          value: image.id,
        })));
      }

      if (get(this, 'imageChioces.length')) {
        const imageChioces = get(this, 'imageChioces');
        set(this, 'config.imageId', get(imageChioces, 'firstObject.value'));
      } else {
        set(this, 'config.imageId', null);
      }
    });
  },
  loadSubnets(region, vpcId, zoneName) {
    const endpoint = `/v1/subnet`;
    const host = bccHostMap[region];
    const params = {
      vpcId,
      zoneName
    };

    return this.apiRequest('GET', host, endpoint, params).then((resp) => {
      return resp.body.subnets.map((subnet) => ({
        label: `${ subnet.name }(${ subnet.cidr })`,
        value: subnet.subnetId,
        raw:   subnet,
      }));
    }).then((subnets) => {
      set(this, 'subnetChoices', subnets);

      if (get(this, 'subnetChoices.length')) {
        set(this, 'config.subnetId', get(subnets, 'firstObject.value'));
      } else {
        set(this, 'config.subnetId', null);
      }

      return subnets;
    });
  },
  loadVpcs(region) {
    const endpoint = `/v1/vpc`;
    const host = bccHostMap[region];

    return this.apiRequest('GET', host, endpoint).then((resp) => {
      return resp.body.vpcs.map((v) => ({
        label: `${ v.name }(${ v.cidr })`,
        value: v.vpcId,
        raw:   v,
      }));
    }).then((vpcs) => {
      set(this, 'vpcChoices', vpcs);
      if (!get(this, 'config.vpcId') && get(this, 'vpcChoices.length')) {
        set(this, 'config.vpcId', get(this, 'vpcChoices.firstObject.value'));
      }

      return vpcs;
    });
  },
  checkContainerNet(region, vpcId, vpcCidr, containerNetCidr) {
    const endpoint = '/v1/cluster/check_container_net';
    const host = cceHostMap[region];

    return this.apiRequest('POST', host, endpoint, {}, {
      'vpcShortId':       vpcId,
      vpcCidr,
      containerNetCidr
    });
  },
  apiRequest(method, host, endpoint, params = {}, data) {
    const timestamp = `${ new Date().toISOString().split('.')[0] }Z`;
    const canonicalURI = this.uriEncodeExceptSlash(endpoint);
    const canonicalQueryString = this.getCanonicalQueryString(params)
    const headers = {
      host,
      'x-bce-date': timestamp,
    };
    const { headers: signedHeaders, cHeadersStr: canonicalHeaders } = this.getCanonicalHeaders(headers);
    const canonicalRequest = [method.toUpperCase(), canonicalURI, canonicalQueryString, canonicalHeaders].join('\n');
    const secretKey = get(this, 'config.secretKey');
    const accessKey = get(this, 'config.accessKey');
    const signingKey = this.hmacSha256Hex(secretKey, `bce-auth-v1/${ accessKey }/${ timestamp }/${ expirationPeriodInSeconds }`);
    const signature = this.hmacSha256Hex(signingKey, canonicalRequest);
    const authStr = `bce-auth-v1/${ accessKey }/${ timestamp }/${ expirationPeriodInSeconds }/${ signedHeaders }/${ signature }`;

    headers['X-API-Auth-Header'] = authStr;
    const reqHeaders = Object.entries(headers).reduce((t, c) => {
      if (c[0].toLowerCase() !== 'host') {
        t[c[0]] = c[1]
      }

      return t;
    }, {});


    const req = {
      headers: reqHeaders,
      url:     `/meta/proxy/https:/${ host }${ endpoint }`,
      method,
    }

    if (Object.keys(params).length > 0) {
      req.url = `${ req.url }?${ Object.entries(params).map((e) => `${ e[0] }=${ e[1] }`).join('&') }`;
    }
    if (method.toLowerCase() !== 'get' && data) {
      req.data = data;
    }

    return get(this, 'globalStore').rawRequest(req);
  },
  uriEncodeExceptSlash(uri) {
    return encodeURIComponent(uri).replace(/%2F/g, '/');
  },
  uriEncode(uri) {
    return encodeURIComponent(uri);
  },
  getCanonicalQueryString(params) {
    const qs = Object.entries(params).filter((e) => e[0].toLowerCase() !== 'authorization').map((e) => {
      return `${ this.uriEncode(e[0]) }=${ this.uriEncode(e[1]) }`;
    }).sort();

    return qs.join('&');
  },
  getCanonicalHeaders(headers = {}) {
    const h = Object.entries(headers).map((e) => {
      return [e[0].toLowerCase(), e[1].trim()];
    }).filter((e) => this.isCanonicalHeader(e[0]) && e[1] !== '');
    const cHeaders = h.map((e) => `${ this.uriEncode(e[0]) }:${ this.uriEncode(e[1]) }`).sort();

    return {
      headers:     h.map((e) => e[0]).sort().join(';'),
      cHeadersStr: cHeaders.join('\n')
    }
  },
  isCanonicalHeader(header) {
    if (canonicalHeaders.indexOf(header.toLowerCase()) > -1 || header.startsWith('x-bce-')) {
      return true;
    }

    return false;
  },
  hmacSha256Hex(sk, str) {
    return AWS.util.crypto.hmac(sk, str, 'hex', 'sha256')
  },
  genPw() {
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const number = ['0', '1', '2', '3', '4', '6', '7', '8', '9'];
    const special = ['!', '@', '#', '$', '%', '^', '*', '(', ')'];
    const all = lower.concat(upper).concat(number).concat(special);
    const randomFrom = (l, u) => {
      return Math.floor(Math.random() * (u - l + 1) + l);
    };
    const getOne = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const arr = [getOne(lower), getOne(upper), getOne(number), getOne(special)];

    const len = randomFrom(8, 32);

    for (let i = 4; i < len; i++) {
      arr.push(getOne(all));
    }

    const newArr = [];

    for (let j = 0;j < len;j++) {
      newArr.push(arr.splice(Math.random() * arr.length, 1)[0]);
    }

    return newArr.join('');
  },
});
