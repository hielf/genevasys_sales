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

  # ApplicationController.helpers.ref_number(9999)
  def ref_number(n)
    if n > 9999
      n = 1
    end

    return n.to_s.rjust(4, '0')
  end

  # ApplicationController.helpers.string_between_markers(s, m1, m2)
  def string_between_markers(s, m1, m2)
    s[/#{Regexp.escape(m1)}(.*?)#{Regexp.escape(m2)}/m, 1]
  end

end
