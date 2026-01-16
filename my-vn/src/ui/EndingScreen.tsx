// my-vn/src/ui/EndingScreen.tsx
import React from "react";

type EndingScreenProps = {
  title: string;                 // “结局标题”
  description: string;           // 结局描述文字
  children?: React.ReactNode;    // 画框里放什么：img/gif/自定义组件都行
  onRestart?: () => void;        // 可选：重开按钮
  onBackToMenu?: () => void;     // 可选：返回标题按钮
  bgColor?: string;            // 可选：背景色（CSS color）
};

export function EndingScreen({
  title,
  description,
  children,
  onRestart,
  onBackToMenu,
  bgColor,
}: EndingScreenProps) {
  const style: React.CSSProperties | undefined = bgColor ? { backgroundColor: bgColor } : undefined;

  return (
    <div className="ending-root" style={style}>
      {/* 上半部分：画框区域 */}
      <div className="ending-frameWrap">
        <div className="ending-frame">
          {/* 你想放的素材（图片、gif、canvas、甚至一段动画组件） */}
          {children}
        </div>
      </div>

      {/* 下半部分：文字区域 */}
      <div className="ending-text">
        <div className="ending-title">{title}</div>
        <div className="ending-desc">{description}</div>

        {(onRestart || onBackToMenu) && (
          <div className="ending-actions">
            {onRestart && (
              <button className="ending-btn" onClick={onRestart}>
                重新开始
              </button>
            )}
            {onBackToMenu && (
              <button className="ending-btn" onClick={onBackToMenu}>
                返回菜单
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
