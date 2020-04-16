export interface DoneCountProps {
  total?: number;
  doneNum?: number;
}


/**
 * DoneCount
 * 完成计数
 * 用于统计一组操作的完成情况
 */
export class DoneCount {

  /**
   * forcedDone : boolean     强制完成标识
   */
  forcedDone: boolean;


  //总数量
  total: number;


  //已完成数量
  doneNum: number;


  /**
   *
   * @param totalOrOptions : DoneCountOptions
   * DoneCountOptions = total:number | DoneCountProps
   * DoneCountProps = {total:number,doneNum:number}
   */
  constructor(totalOrOptions?: number | DoneCountProps);

  readonly undoneNum: number;


  /**
   * done : boolean   只读；表示是否完成
   */
  readonly done: boolean;

  /**
   * realDone : boolean   只读；表示实际上是否真正的完成
   */
  readonly realDone: boolean;


  /**
   * 重置
   */
  reset(): void;

  /**
   * 重置
   */
  resetDoneNum(): void;


  /**
   * 登录新的完成次数
   * @param num : number
   * @returns boolean 是否完成
   */
  doneAgain(num?: number): boolean

}


export type DoneNames = string | string[];
export type DoneNum = number

export type DoneNamesOrNum = DoneNames | DoneNum;

export interface NamedDoneCountProps extends DoneCountProps {
  namesOrNum?: DoneNamesOrNum;
  names?: DoneNames;
  autoIncrTotalIfRepeat?: boolean;
  maxRepetNum?: number;
}


export class NamedDoneCount extends DoneCount {

  /**
   *
   * @param totalOrOptions : NamedDoneCountOptions
   * NamedDoneCountOptions = total:number | NamedDoneCountProps
   * NamedDoneCountProps = {...DoneCountProps,namesOrNum : Names | DoneNum,names: Names,autoIncrTotalIfRepeat:boolean,maxRepetNum:number}
   *
   * Names : string | [string]
   * DoneNum : number
   */
  constructor(totalOrOptions: number | NamedDoneCountProps);


  /**
   * 当 name 重复时，是否自动增长 total
   * @type {boolean}
   */
  autoIncrTotalIfRepeat?: boolean;


  total: number;


  oriTotal: number;


  readonly nameRecord: Map<string, number>;


  /**
   * 最大重复数目
   * @type {number}
   */
  maxRepetNum: number;


  /**
   * 获取所有 name 的总计数
   * @returns {number}
   */
  readonly nameNum: number;


  protected _doneNum: number;


  doneNum: number;


  /**
   * 重置
   */
  resetDoneNum(): void;


  /**
   *
   * @param namesOrNum : DoneNamesOrNum
   * DoneNamesOrNum = number | DoneNames
   * DoneNames = string | [string]
   * @returns {*}
   */
  doneAgain(namesOrNum?: DoneNamesOrNum): boolean;


  /**
   * @param names : DoneNames
   * @returns {*}
   */
  doneAgainNames(names: DoneNames): boolean;


  has(name: string): boolean;


  /**
   * 获取指定 name 的计数
   * @param name
   * @returns {*|number}
   */
  getNameNum(name: string): number;


  /**
   * 获取最大的 name 计数
   * @returns {number}
   */
  readonly maxNameNum: number;


}


/**
 * 冲突策略 ConflictPolicy 类型常量
 * ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update"
 */
export const conflictPolicy_Add = "Add";
export const conflictPolicy_Reset = "Reset";
export const conflictPolicy_Recreate = "Recreate";
export const conflictPolicy_Update = "Update";

export type ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update";


/**
 * 自动删除目标 AutoDeleteTarget 类型常量
 * AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done"
 */
export const autoDeleteTarget_ForcedDone = "ForcedDone";
export const autoDeleteTarget_RealDone = "RealDone";
export const autoDeleteTarget_Done = "Done";

export type AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done" ;


/**
 * 自动删除目标 AutoDeleteMode 类型常量
 * AutoDeleteMode = "Delay" | "Immediately" | "No"
 */
export const autoDeleteMode_Delay = "Delay";
export const autoDeleteMode_Immediately = "Immediately";
export const autoDeleteMode_No = "No";

export type AutoDeleteMode = "Delay" | "Immediately" | "No";


export interface DCManagerProps {
  clearDelay?: number;
  conflictPolicy?: ConflictPolicy;
  autoDeleteTarget?: AutoDeleteTarget;
  autoDeleteMode?: AutoDeleteMode
}

export type DoneCountKey = string;


export interface DoneAgainOptions extends DoneCountProps {
  key: DoneCountKey;
  conflictPolicy?: ConflictPolicy;
}


export type DoneAgainParam = DoneCountKey | DoneAgainOptions;
export type NamedDoneAgainParam = DoneCountKey | NamedDoneAgainOptions;


export interface AutoDeleteOptions {
  autoDeleteMode?: AutoDeleteMode;
  autoDeleteTarget?: AutoDeleteTarget;
  clearDelay?: number;
}


export interface DoneCountManagerInfo {
  total: number;
  doneNum: number;
  undoneNum: number;
  allDone: boolean;
  keys: DoneCountKey[];
}


export class DoneCountManager {

  /**
   * props : DCManagerProps
   * DCManagerProps = {clearDelay:number,conflictPolicy : ConflictPolicy ,autoDeleteTarget:AutoDeleteTarget ,autoDeleteMode:AutoDeleteMode}
   * @param props
   */
  constructor(props?: DCManagerProps);


  doneMap: Map<DoneCountKey, DoneCount>;


  /**
   * 创建 DoneCount 实例
   * @param totalOrOptions : DoneCountOptions
   * @returns {DoneCount}
   */
  protected _createDoneCount(totalOrOptions: number | DoneCountProps): DoneCount;

  /**
   * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
   * @param doneCount : DoneCount
   * @param dcProps : DoneCountProps
   * @returns {*}
   * @private
   */
  protected _confDoneCount(doneCount: DoneCount, dcProps: DoneCountProps): DoneCount


  /**
   * 设置 延迟清除已完成的 DoneCount 的延时时间
   * @returns {number|*}
   */
  clearDelay: number;


  /**
   * 延迟删除指定 key 的 DoneCount
   * @param key : DoneCountKey  需要被延迟删除的 DoneCount 的 key
   * @param delay ?: number   可选；默认值：this.clearDelay； 延时时间；
   *
   * 注意：
   * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
   */
  delayClearKey(key: DoneCountKey, delay?: number): void;


  /**
   * 删除指定 key 的 DoneCount
   * @param key : DoneCountKey  需要被删除的 DoneCount 的 key
   * @return boolean  表示是否完成删除；
   *
   * 注意：
   * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
   * - 当指定 key 的 doneCount 不存时，也会 返回 true ；
   */
  clearKey(key: DoneCountKey): boolean;

  clear(): boolean;


  forcedDoneKey(key: DoneCountKey): void;

  forcedDone(): void;


  /**
   * 注册 DoneCount 时，当 注册的 DoneCount 的 total 和 已存在的 DoneCount 的 total 不一致时 的处理方式
   * @returns {string|*}
   */
  conflictPolicy: ConflictPolicy;


  /**
   * 注册DoneCount
   * @param keyOrOpts : DoneAgainOptions
   *
   * DoneAgainOptions = key | {key,conflictPolicy,...DoneCountProps}
   * @returns {DoneCount}
   */
  register(keyOrOpts: DoneAgainParam): DoneCount;


  /**
   *
   * @param keyOrOpts : DoneAgainOptions
   * @param doneNum
   * @returns DoneCount | Error
   */
  unsafeDoneAgain(keyOrOpts: DoneAgainParam, doneNum?: number): DoneCount | Error;


  /**
   * autoDeleteTarget : AutoDeleteTarget    自动删除目标
   */
  autoDeleteTarget: AutoDeleteTarget;


  /**
   * autoDeleteMode : AutoDeleteMode   自动删除模式
   */
  autoDeleteMode: AutoDeleteMode;


  /**
   * 根据配置 options ，自动删除指定 key 的 DoneCount
   * @param key : DoneCountKey    被自动删除的 DoneCount 的 key
   * @param options ?: AutoDeleteOptions   可选；配置选项
   *
   * AutoDeleteOptions = {autoDeleteMode : AutoDeleteMode,autoDeleteTarget : AutoDeleteTarget,clearDelay : number}
   */
  autoDelete(key: DoneCountKey, options?: AutoDeleteOptions): void;


  /**
   *
   * @param keyOrOpts : DoneAgainOptions
   * @param doneNum : DoneNamesOrNum
   * @returns {*}
   */
  doneAgain(keyOrOpts: DoneAgainParam, doneNum?: number): DoneCount;


  getDoneCount(key: DoneCountKey): DoneCount;


  getUndoneNum(key: DoneCountKey): number;

  getDone(key: DoneCountKey): boolean;


  readonly info: DoneCountManagerInfo;


  readonly total: number;


  readonly doneNum: number;


  readonly undoneNum: number;

  readonly done: boolean;

}


export interface NamedDoneAgainOptions extends DoneAgainOptions, NamedDoneCountProps {

}


export interface NDCManagerProps extends DCManagerProps {
  autoIncrTotalIfRepeat?: boolean;
}


export class NamedDoneCountManager extends DoneCountManager {

  constructor(props?: NDCManagerProps);

  /**
   * 创建 DoneCount 实例
   * @param totalOrOptions
   * @returns {DoneCount}
   */
  protected _createDoneCount(totalOrOptions: number | DoneCountProps): NamedDoneCount;


  /**
   * DoneCount 的 autoIncrTotalIfRepeat 的默认值
   * @type {boolean}
   */
  autoIncrTotalIfRepeat: boolean;


  /**
   * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
   * @param doneCount
   * @param confOpts
   * @returns {*}
   * @private
   */
  protected _confDoneCount(doneCount: DoneCount, confOpts: NamedDoneCountProps): NamedDoneCount;


  /**
   *
   * @param keyOrOpts : DoneAgainOptions
   * @param namesOrNum : DoneNamesOrNum
   * @returns DoneCount | Error
   *
   * DoneAgainOptions = {key,namesOrNum,names,doneNum,...}
   */
  unsafeDoneAgain(keyOrOpts: NamedDoneAgainParam, namesOrNum?: DoneNamesOrNum): NamedDoneCount | Error;


  register(keyOrOpts: NamedDoneAgainParam): NamedDoneCount;

  doneAgain(keyOrOpts: NamedDoneAgainParam, doneNum?: number): NamedDoneCount;

  getDoneCount(key: DoneCountKey): NamedDoneCount;


}
