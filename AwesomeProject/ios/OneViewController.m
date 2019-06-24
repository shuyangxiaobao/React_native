//
//  OneViewController.m
//  AwesomeProject
//
//  Created by xiaobao on 2019/6/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "OneViewController.h"


@interface OneViewController ()
@property(nonatomic,copy)NSString *filePath;  //!< <#name#>

@property (nonatomic,strong) UIButton *buttonOne;
@property (nonatomic,strong) UIButton *buttonTwo;
@property (nonatomic,strong) UIButton *buttonThree;


@end

@implementation OneViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  [self createUI];
  self.navigationController.navigationBar.hidden = YES;
    // Do any additional setup after loading the view.
}

-(void)createUI{
  _buttonOne = [UIButton buttonWithType:(UIButtonTypeSystem)];
  [self.view addSubview:_buttonOne];
  [_buttonOne setTitle:@"Button 1" forState:(UIControlStateNormal)];
  [_buttonOne addTarget:self action:@selector(clickOne:) forControlEvents:(UIControlEventTouchUpInside)];
  _buttonOne.layer.borderWidth=1;
  _buttonOne.layer.borderColor = [UIColor colorWithHexString:@"178dfd"].CGColor;
  [_buttonOne mas_makeConstraints:^(MASConstraintMaker *make) {
    make.centerY.mas_equalTo(0);
    make.left.mas_equalTo(20);
    make.width.mas_equalTo(100);
    make.height.mas_equalTo(40);
  }];
  
  
  _buttonTwo = [UIButton buttonWithType:(UIButtonTypeSystem)];
  [self.view addSubview:_buttonTwo];
  [_buttonTwo setTitle:@"Button 2" forState:(UIControlStateNormal)];
  [_buttonTwo addTarget:self action:@selector(clickTwo:) forControlEvents:(UIControlEventTouchUpInside)];
  _buttonTwo.layer.borderWidth=1;
  _buttonTwo.layer.borderColor = [UIColor colorWithHexString:@"178dfd"].CGColor;
  [_buttonTwo mas_makeConstraints:^(MASConstraintMaker *make) {
    make.centerY.mas_equalTo(0);
    make.left.mas_equalTo(_buttonOne.mas_right).offset(20);
    make.width.mas_equalTo(100);
    make.height.mas_equalTo(40);
  }];
  
  
  
  _buttonThree = [UIButton buttonWithType:(UIButtonTypeSystem)];
  [self.view addSubview:_buttonThree];
  [_buttonThree setTitle:@"Button 3" forState:(UIControlStateNormal)];
  [_buttonThree addTarget:self action:@selector(clickThree:) forControlEvents:(UIControlEventTouchUpInside)];
  _buttonThree.layer.borderWidth=1;
  _buttonThree.layer.borderColor = [UIColor colorWithHexString:@"178dfd"].CGColor;
  [_buttonThree mas_makeConstraints:^(MASConstraintMaker *make) {
    make.centerY.mas_equalTo(0);
    make.left.mas_equalTo(_buttonTwo.mas_right).offset(20);
    make.width.mas_equalTo(100);
    make.height.mas_equalTo(40);
  }];
  
  
  
}

-(void)clickOne:(UIButton *)button{
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/index.ios.jsbundle"];
  BOOL exist = [fileManager fileExistsAtPath:path];
  if (exist) {
    [self jumpRN:@"index.ios.jsbundle"];
  }else{
    [self loaddata:@"index.ios.jsbundle"];
  }
}

-(void)clickTwo:(UIButton *)button{
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/index2.ios.jsbundle"];
  BOOL exist = [fileManager fileExistsAtPath:path];
  if (exist) {
    [self jumpRN:@"index2.ios.jsbundle"];
  }else{
    [self loaddata:@"index2.ios.jsbundle"];
  }
}


-(void)clickThree:(UIButton *)button{
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/indexKYE.ios.jsbundle"];
  BOOL exist = [fileManager fileExistsAtPath:path];
  if (exist) {
    [self jumpRN:@"indexKYE.ios.jsbundle"];
  }else{
    [self loaddata:@"indexKYE.ios.jsbundle"];
  }
}




-(void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event{
  

}

-(void)jumpRN:(NSString *)indexjs{
  NSURL *jsCodeLocation;
  
#warning 加载js文件的两种方式
  if (/* DISABLES CODE */ (1)) {
    NSFileManager *manager = [NSFileManager defaultManager];
    NSURL *url = [[manager URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] firstObject];
    jsCodeLocation = [url URLByAppendingPathComponent:indexjs];
  } else{
//    NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/index.ios.jsbundle"];
    NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:[NSString stringWithFormat:@"Documents/%@",indexjs]];
    jsCodeLocation = [NSURL URLWithString:path];
  }
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"AwesomeProject"
                                               initialProperties:nil
                                                   launchOptions:nil];
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  [self.navigationController pushViewController:rootViewController animated:YES];
  //  [self presentViewController:rootViewController animated:YES completion:nil];
}

-(void)loaddata:(NSString *)indexjs{
     
  
//  NSString *str = @"http://192.168.206.9/index.ios.jsbundle";
 NSString* str = [NSString stringWithFormat:@"http://192.168.206.9/%@",indexjs];
  //下载地址
  NSString*hString = [str stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
  //创建请求对象
  NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:hString]];
  
  //创建会话管理对象（在不使用Configuration来设置时用默认的manager足矣）
  AFHTTPSessionManager *sessionManager = [AFHTTPSessionManager manager];
  // 变量
  
  // YSProgressView
  //创建下载任务
  NSURLSessionDownloadTask *downloadTask = [sessionManager downloadTaskWithRequest:request progress:^(NSProgress *downloadProgress) {
    
    NSLog(@"2总大小：%lld,当前大小:%lld",downloadProgress.totalUnitCount,downloadProgress.completedUnitCount);
    

    
    
  } destination:^NSURL * _Nonnull(NSURL * _Nonnull targetPath, NSURLResponse * _Nonnull response) {
    
    //接收到响应，准备开始接受数据
    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
    //打印请求状态码
    //targetPath临时问价保存路径
    
    //返回值为本次下载任务的保存路径
    NSString *filePath1 = [NSHomeDirectory() stringByAppendingPathComponent:[NSString stringWithFormat:@"Documents/%@",response.suggestedFilename]];
    //              NSString *filePath1 = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/images.PNG"];
    //此block返回值为下载完之后文件存放的路径
    //这个返回的NSURL后面会传到filePath，因此这里自己设置的filePath可以随意取名
    
    NSLog(@"%@",filePath1);
    return [NSURL fileURLWithPath:filePath1];
  } completionHandler:^(NSURLResponse * _Nonnull response, NSURL * _Nullable filePath, NSError * _Nullable error) {
    
    //这个block返回的filePath实际上就是我们上面给他的确定的filePath,在这里他提供了这个可查下载文件路径的参数
//    _filePath = filePath;
    [self jumpRN:indexjs];
  }];
  //开始任务
  [downloadTask resume];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
