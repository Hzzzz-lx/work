export interface FinanceLedgerData {
  // 项目名称
  projectName: string;
  // 分期
  installment: string;
  // 楼栋号
  buildingNo: string;
  // 房间号
  roomNo: string;
  // 合同甲方名称
  contractPartyName: string;
  // 合同编号
  contractNo: string;
  // 客户名称
  customerName: string;
  // 签约日期
  signingDate: string;
  // 合同面积
  contractArea: string;
  // 租金单价
  rentPrice: string;
  // 租期（年）
  leasePeriod: string;
  // 合同起始日
  contractStartDate: string;
  // 合同到期日
  contractEndDate: string;
  // 应收履约保证金时间
  shouldReceivePerformanceBondDate: string;
  // 应收履约保证金金额
  shouldReceivePerformanceBondAmount: string;
  // 已收履约保证金时间
  receivedPerformanceBondDate: string;
  // 已收履约保证金金额
  receivedPerformanceBondAmount: string;
  // 装修免租期
  fitmentRentFreePeriod: string;
  // 合同应收租金总额
  contractShouldReceiveRentAmount: string;
  // 租金税率
  rentTaxRate: string;
  // 截止当前应收租金金额
  shouldReceiveRentAmount: string;
  // 截止当前已收租金金额
  receivedRentAmount: string;
  // 截止当前欠缴租金金额
  arrearsRentAmount: string;
  // 截止当前开具发票时间
  invoiceDate: string;
  // 截止当前已开具发票金额
  issuedInvoiceAmount: string;
  // 已开发票对应租金周期
  issuedInvoiceRentPeriod: string;

  // 以下需额外斟酌
  // 截止20xx年x季度累计应确认收入
  // 20xx年x月应确认收入

  // 以下需额外斟酌
  // 截止2023年x-1季度累计已确认收入（元）
  // 2023年当年x-1季度累计已确认收入（元）
  // 2023年3月确认收入（元）
  // 2023年6月确认收入（元）
  // 2023年9月确认收入（元）
  // 2023年12月确认收入（元）

  // 租金减免额度（月）
  rentReductionAmount: string;
  // 租金减免总金额（元）
  rentReductionTotalAmount: string;
  // 租金减免应冲减收入（元）
  rentReductionShouldOffsetIncome: string;
  // 租金减免已冲减收入（元）
  rentReductionOffsetIncome: string;
  // 提前退租时间
  earlyTerminationDate: string;
  // 提前退租收取违约金应确认收入（元）
  earlyTerminationShouldConfirmIncome: string;
  // 提前退租收取违约金已确认收入（元）
  earlyTerminationConfirmedIncome: string;
  // 合同是否在执行中
  isContractExecuting: string;
  // 解除合同时间
  contractTerminationDate: string;
}

export interface RentalLedgerByProjectData {
  // 项目名称
  projectName: string;
  // 项目地址
  projectAddress: string;
  // 出租率（截止时间项目整体出租率）
  occupancyRate: string;
  // 退租率
  leaseCancellationRate: string;
  // 新增签约面积
  addContractArea: string;
  // 新增续租面积
  addRenewalArea: string;
  // 新增退租面积
  addCancellationArea: string;
}

export interface RentalLedgerByRoomData {
  // 项目名称
  projectName: string;
  // 分期
  installment: string;
  // 楼栋
  buildingNo: string;
  // 层号
  floorNo: string;
  // 房号
  roomNo: string;
  // 实测面积
  actualArea: string;
  // 可租面积
  activeArea: string;
  // 已租面积
  activatedArea: string;
  // 房源情况
  availability: string;
  // 客户名称
  customerName: string;
  // 经营品牌（商业客户经营品牌）
  brand: string;
  // 合同面积
  contractArea: string;
  // 签约日期
  signingDate: string;
  // 合同起始日
  contractStartDate: string;
  // 合同到期日
  contractEndDate: string;
  // 租期（年）
  leasePeriod: string;
  // 免租期
  rentFreePeriod: string;
  // 押付方式
  paymentMethod: string;
  // 履约保证金
  performanceBond: string;
  // 签约单价
  signingPrice: string;
  // 招商人员
  businessPersonnel: string;
  // 客户渠道
  customerChannel: string;
  // 所属行业
  industry: string;
  // 备注
  remarks: string;
}

export interface RentArrearsData {
  // 项目名称
  projectName: string;
  // 房间号
  roomNo: string;
  // 客户名称
  customerName: string;
  // 合同面积
  contractArea: string;
  // 合同起始时间
  contractStartDate: string;
  // 合同到期日
  contractEndDate: string;
  // 押金
  deposit: string;
  // 应收租金
  shouldReceiveRent: string;
  // 实收租金
  receivedRent: string;
  // 拖欠租金
  arrearsRent: string;
  // 应回款节点
  shouldReturnDate: string;
  // 逾期天数
  overdueDays: string;
  // 催款进度
  reminderProgress: string;
  // 措施
  measure: string;
  // 备注
  remarks: string;
}

export interface MerchantDataAnalyzeData {
  // 项目名称
  projectName: string;
  // 年度任务之租赁面积 (m2)
  annualLeasingArea: string;
  // 年度任务之租赁回款 (万元)
  annualLeasingReturn: string;
  // 年度完成情况之租赁面积 (m2)
  annualCompletionLeasingArea: string;
  // 年度完成情况之租赁面积占比 (%)
  annualCompletionLeasingAreaPercentage: string;
  // 年度完成情况之租赁回款 (万元)
  annualCompletionLeasingReturn: string;
  // 年度完成情况之租赁回款占比 (%)
  annualCompletionLeasingReturnPercentage: string;
  // 第一季度目标之租赁面积 (m2)
  firstQuarterLeasingAreaTarget: string;
  // 第一季度目标之租赁回款 (万元)
  firstQuarterLeasingReturnTarget: string;
  // 第一季度完成情况之租赁面积 (m2)
  firstQuarterCompletionLeasingArea: string;
  // 第一季度完成情况之租赁面积占比 (%)
  firstQuarterCompletionLeasingAreaPercentage: string;
  // 第一季度完成情况之租赁回款 (万元)
  firstQuarterCompletionLeasingReturn: string;
  // 第一季度完成情况之租赁回款占比 (%)
  firstQuarterCompletionLeasingReturnPercentage: string;
  // 第二季度目标之租赁面积 (m2)
  secondQuarterLeasingAreaTarget: string;
  // 第二季度目标之租赁回款 (万元)
  secondQuarterLeasingReturnTarget: string;
  // 第二季度完成情况之租赁面积 (m2)
  secondQuarterCompletionLeasingArea: string;
  // 第二季度完成情况之租赁面积占比 (%)
  secondQuarterCompletionLeasingAreaPercentage: string;
  // 第二季度完成情况之租赁回款 (万元)
  secondQuarterCompletionLeasingReturn: string;
  // 第二季度完成情况之租赁回款占比 (%)
  secondQuarterCompletionLeasingReturnPercentage: string;
  // 第三季度目标之租赁面积 (m2)
  thirdQuarterLeasingAreaTarget: string;
  // 第三季度目标之租赁回款 (万元)
  thirdQuarterLeasingReturnTarget: string;
  // 第三季度完成情况之租赁面积 (m2)
  thirdQuarterCompletionLeasingArea: string;
  // 第三季度完成情况之租赁面积占比 (%)
  thirdQuarterCompletionLeasingAreaPercentage: string;
  // 第三季度完成情况之租赁回款 (万元)
  thirdQuarterCompletionLeasingReturn: string;
  // 第三季度完成情况之租赁回款占比 (%)
  thirdQuarterCompletionLeasingReturnPercentage: string;
  // 第四季度目标之租赁面积 (m2)
  fourthQuarterLeasingAreaTarget: string;
  // 第四季度目标之租赁回款 (万元)
  fourthQuarterLeasingReturnTarget: string;
  // 第四季度完成情况之租赁面积 (m2)
  fourthQuarterCompletionLeasingArea: string;
  // 第四季度完成情况之租赁面积占比 (%)
  fourthQuarterCompletionLeasingAreaPercentage: string;
  // 第四季度完成情况之租赁回款 (万元)
  fourthQuarterCompletionLeasingReturn: string;
  // 第四季度完成情况之租赁回款占比 (%)
  fourthQuarterCompletionLeasingReturnPercentage: string;
}

export interface MerchantDataAnalyzeOwnedOccupancyRateData {
  // 项目名称
  projectName: string;
  // 可租面积 (m2)
  availableArea: string;
  // 出租率目标 (%)
  occupancyRateTarget: string;
  // 出租面积目标 (m2)
  occupancyAreaTarget: string;

  // 以下三个数据判断条件模糊，暂不实现
  // 累计已出租面积 (m2)
  // 出租率 (%)
  // 比较上月净面积 (m2)

  // 出租面积缺口 (m2)
  occupancyAreaGap: string;
}
