# encoding: utf-8
include Base64

module ApplicationHelper

  def strftime_time(time_obj)
    time_obj.strftime('%Y-%m-%d %H:%M:%S')
  end

  def paginate_attrs(json, object)
    json.(object, :current_page, :next_page, :prev_page, :total_pages, :total_count)
  end

  def unpad(s)
    a = (0 ... s.length).find_all { |i| s[i,1] == '}' }
    pos = a.max
    return s[0..pos]
    # return s.gsub(/\a+$/, '')
  end
end
